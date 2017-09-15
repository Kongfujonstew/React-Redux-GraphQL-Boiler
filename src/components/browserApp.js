import React from 'react';
import { render } from 'react-dom';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../redux/reducers/index';

import Main from './Main.js';

const store = createStore(reducers);
const context = {};

render(<Provider store={store}>
        <StaticRouter location={window.location} context={context}>
        <Main />
        </StaticRouter>
      </Provider>, 
  document.getElementById('main'));
