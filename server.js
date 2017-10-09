import express from 'express';
import morgan from 'morgan';
import path from 'path';
//iso server app and admin - serverApp needs revisiting
import serverApp from './src/application/serverApp';
import adminApp from './src/application/adminApp';
//GraphQL imports
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import schema from './graphQL/schema.js';
import { graphql } from 'graphql';
import fs from 'fs';
import { introspectionQuery, printSchema } from 'graphql';
// Save JSON of full schema introspection for Babel Relay Plugin to use
// graphql(schema, introspectionQuery).then(result => {
//   fs.writeFileSync(
//     `schema.json`,
//     JSON.stringify(result, null, 2)
//   );
// });

// fs.writeFileSync(
//   `schema.graphql`,
//   printSchema(schema)
// );


//Instatiate server and set routes & middleware
const app = express();
const port = process.env.PORT || 8081;
app.use(morgan('dev'));

//Auth
// import cookieParser from 'cookie-parser';
// import autho from './src/middleware/auth/index';
// import verifyLogin from './src/middleware/auth/verifyLogin';
// app.use(cookieParser());
// app.use('/login', verifyLogin);
// app.use(autho);  //checks for cookie & redirects if incorrect

app.use(express.static(path.resolve(__dirname, './src/public')));

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use(bodyParser.json());

app.post('/graphql', (req, res) => {
  console.log('req.body: ', req.body);
  graphql(schema, req.body.query)
  .then((result) => {
    console.log('result', result);
    res.send(JSON.stringify(result/*, null, 2*/));
  });
});

app.use('/admin', (req, res) => {
  adminApp(req, res);
});

app.use((req, res) => {
  serverApp(req, res);
});

//commented line will do a sync with db then create server
if (module === require.main) {
  app.listen(port);
  // models.sequelize.sync().then(() => app.listen(port));
};
