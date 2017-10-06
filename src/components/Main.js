import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';

import { Home } from './Home';
import { slashTwo } from './slashTwo';
import { Tester } from './Tester';


class Main extends React.Component {

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <Route path="/test" exact component={Tester} />
        <Route path="/slashtwo" exact component={slashTwo} />
        <Route path="/" exact component={Home} />
      </div>
    )
  }
}

export default Main;
