import express from 'express';
import morgan from 'morgan';
import path from 'path';

//iso server app and admin
import serverApp from './src/application/serverApp';
import adminApp from './src/application/adminApp';

//GraphQL imports
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphQL/schema';
import resolvers from './graphQL/resolvers';
import models from './models';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

//Instatiate server and set routes & middleware
const app = express();
const port = process.env.PORT || 8081;
app.use(morgan('dev'));

//authentication -- needs to be moved b/cinterrupts admin etc
import cookieParser from 'cookie-parser';
import autho from './src/middleware/auth/index';
import verifyLogin from './src/middleware/auth/verifyLogin';
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './src/public')));

app.use('/login', verifyLogin);

// app.use(autho);

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

app.use('/admin', (req, res) => {
  adminApp(req, res);
});

app.use((req, res) => {
  serverApp(req, res);
});

//sync with db then create server
if (module === require.main) {
  models.sequelize.sync().then(() => app.listen(port));
};
