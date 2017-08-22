import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphQL/schema';
import resolvers from './graphQL/resolvers';
import models from './models';

const app = express();
const port = process.env.PORT || 8081;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(morgan('dev'));
app.use(express.static('src'));

if (module === require.main) {
  models.sequelize.sync().then(() => app.listen(port));
};

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));
