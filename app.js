import express from 'express';
import morgan from 'morgan';

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

//Server Render React and React-Router
import React from 'react';
const ReactRouter = require('react-router-dom');
import ReactDOMServer from 'react-dom/server';

import _ from 'lodash';
import fs from 'fs';

const StaticRouter = ReactRouter.StaticRouter;
const baseTemplate = fs.readFileSync('./src/index.html');
const template = _.template(baseTemplate);

import { Router } from './src/components/Router';

//Instatiate server and set routes & middleware
const app = express();
const port = process.env.PORT || 8081;

app.use(morgan('dev'));

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

app.use((req, res) => {
  console.log(req.url)
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, {location: req.url, context},
      React.createElement(Router)
    )
  );

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({body}));
  res.end();
});


if (module === require.main) {
  models.sequelize.sync().then(() => app.listen(port));
};
