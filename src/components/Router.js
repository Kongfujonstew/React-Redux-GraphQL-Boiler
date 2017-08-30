import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Tester } from './Tester';
import { Parent } from './Parent';
import reducers from '../redux/reducers/index';
// import promiseMiddleware from 'redux-promise-middleware';
// import thunk from 'redux-thunk';

const store = createStore(reducers);

export class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>    
          <Switch>
            <Route path="/" component={Tester} />
            <Route path="/parent" component={Parent} />
          </Switch>
        </Provider>
      </BrowserRouter>
    )
  }
}



  