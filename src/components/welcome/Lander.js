import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';

// import { Lander } from './Lander';
// import { slashTwo } from './slashTwo';
// import { Tester } from './Tester';


class Lander extends React.Component {
  componentDidMount() {
    // console.log('seeting');
    // history.pushState(null, null, '/test');
    window.addEventListener('popstate', (e) => {
      // alert('hi')
      // e.preventDefault();
      // history.go(1)
      console.log('popstate triggered; here is e: ', e);
    });
  };

  render () {
    return (
      <div>
        Lander
      </div>
    )
  }
}

export default Lander;