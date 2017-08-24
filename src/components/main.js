import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from './Router';

import reducers from '../redux/reducers/index';

// import promiseMiddleware from 'redux-promise-middleware';
// import thunk from 'redux-thunk';

const store = createStore(reducers);

// console.log('store on creation at main: ', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, 
  document.getElementById('main')
);

