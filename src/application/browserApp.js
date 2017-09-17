import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router';
import reducers from '../redux/reducers/index';

import Main from '../components/Main.js';

const store = createStore(reducers);
const context = {};

console.log('app.js bootstraps. store state: ', store.getState());

render(<Provider store={store}>
        <BrowserRouter
          location={window.location}
          context={context}
        >
          <Main />
        </BrowserRouter>
      </Provider>, 
  document.getElementById('main'));
