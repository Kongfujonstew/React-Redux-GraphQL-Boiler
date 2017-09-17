import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';

import { Lander } from './Lander';
import { slashTwo } from './slashTwo';
import { Tester } from './Tester';


class Main extends React.Component {

  componentDidMount() {
    console.log('seeting');
    // history.pushState(null, null, '/test');
    window.addEventListener('popstate', (e) => {
      // alert('hi')
      // e.preventDefault();
      // history.go(1)
      console.log('popstate triggered; here is e: ', e);
    })
  }

  render () {
    return (
      <div>
        <Route path="/test" exact component={Tester} />
        <Route path="/slashtwo" exact component={slashTwo} />
        <Route path="/" exact component={Lander} />
      </div>
    )
  }
}

export default Main;
