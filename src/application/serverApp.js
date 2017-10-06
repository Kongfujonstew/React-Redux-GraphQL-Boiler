import React from 'react';
// const ReactRouter = require('react-router-dom');
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Main from '../components/Main';
import reducers from '../redux/reducers';
import index from '../templates/index';
import header from '../templates/header';
import footer from '../templates/footer';

//import serialize here

const store = createStore(reducers);

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

  const template = index(header, footer, body);

  if (context.url) {
    res.redirect(context.url);
  };

  res.write(template);
  res.end();
};
