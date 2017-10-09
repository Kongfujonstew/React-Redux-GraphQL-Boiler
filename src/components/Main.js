import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { Tester } from './Tester';
//this doesn't work yet
import Relay_Home from '../components_relay/Relay_Home';
//this works
import RelayRoot from '../components_relay/RelayRoot';

class Main extends React.Component {

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <RelayRoot />
        <Route path="/test" exact component={Tester} />
        <Route path="/" exact component={Home} />
      </div>
    )
  }
}

export default Main;
