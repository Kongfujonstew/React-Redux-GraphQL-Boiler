import express from 'express';
import morgan from 'morgan';
import path from 'path';

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

app.use(express.static(path.resolve(__dirname, './src/public')));
app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

//Server Render React and React-Router
import React from 'react';
const ReactRouter = require('react-router-dom');
import ReactDOMServer from 'react-dom/server';

import _ from 'lodash';
import fs from 'fs';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

const baseTemplate = fs.readFileSync('./src/templates/index.html');
const template = _.template(baseTemplate);

import Main from './src/components/Main';

import { createStore, applyMiddleware } from "redux";
import reducers from './src/redux/reducers';
const store = createStore(reducers);


app.use((req, res) => {
  console.log('app.use about to renderToString, req.url: ', req.url);
  const location = req.url;
  const context = {};
  const body = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <Main />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(context.url);
  };

  res.write(template({body}));
  res.end();
});


if (module === require.main) {
  models.sequelize.sync().then(() => app.listen(port));
};
