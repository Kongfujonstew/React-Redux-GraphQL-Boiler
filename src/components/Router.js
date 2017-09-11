import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../redux/reducers/index';

import { slash } from './slash';
import { slashTwo } from './slashTwo';
import { Tester } from './Tester';


const store = createStore(reducers);

export class Router extends React.Component {
  render () {
    return (
      <div>
      <div>Place header here</div>
      <Provider store={store}>
        <Switch>
          <Route path="/test" component={Tester} />
          <Route path="/slashtwo" component={slashTwo} />
          <Route path="/" component={slash} />
        </Switch>
      </Provider>
      </div>
    )
  }
}
