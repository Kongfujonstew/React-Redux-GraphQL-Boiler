import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import RootContainer from './rootContainer';

import reducers from '../redux/reducers/index';

// import promiseMiddleware from 'redux-promise-middleware';
// import thunk from 'redux-thunk';

const store = createStore(reducers);

// console.log('store on creation at main: ', store.getState());

ReactDOM.render(<RootContainer store={store}/>, document.getElementById('main'));
