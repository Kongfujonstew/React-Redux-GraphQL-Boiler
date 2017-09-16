import React from 'react';
import { render } from 'react-dom';
import { StaticRouter, Switch, Route } from 'react-router-dom';

import { Lander } from './Lander';
import { slashTwo } from './slashTwo';
import { Tester } from './Tester';


console.log('heres a random console.log in Main');

// const store = createStore(reducers);

class Main extends React.Component {

  componentDidMount() {
    console.log('Router on mount')
  }

  render () {
    return (
      <Switch>
        <Route path="/test" component={Tester} />
        <Route path="/slashtwo" component={slashTwo} />
        <Route path="/" component={Lander} />
      </Switch>
    )
  }
}

export default Main;
