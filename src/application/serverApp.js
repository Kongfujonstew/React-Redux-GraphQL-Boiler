import React from 'react';
// const ReactRouter = require('react-router-dom');
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Main from '../components/Main';
import reducers from '../redux/reducers';

//import serialize here


const store = createStore(reducers);

import header from '../templates/header';
import footer from '../templates/footer';

export default (req, res) => {
  const location = req.url;
  const context = {};
  const body = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <Main />
      </StaticRouter>
    </Provider>
  );

  const template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The react iso boiler</title>
        <link rel="stylesheet" href="/styles/styles.css">
        <link rel="icon" href="/favicon/image.png" type="image/x-icon">
    <!--     <link href="https://fonts.googleapis.com/css?family=Lato|Nothing+You+Could+Do" rel="stylesheet"> -->
        <script src="/app.js" defer></script>
      </head>
      <body>
        ${header}
        <div id="main">${body}</div>
        ${footer}
      </body>
    </html>`

  if (context.url) {
    res.redirect(context.url);
  };

  res.write(template);
  res.end();
};
