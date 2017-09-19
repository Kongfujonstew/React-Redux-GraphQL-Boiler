import React from 'react';
import { render } from 'react-dom';

class Login extends React.Component {
  componentDidMount() {

  }

  testButton () {
    console.log('testButton fired');
  }

  render () {
    return (
      <div>
        Login 
        <div>You are loggedIn: {}</div>
        <form>
          <input type="text" />
          <br />
          <input type="text" />
        </form>
        <div
          onClick={}
        >Login</div>
        <div
          onClick={}
        >Logout</div>
        <div
          onClick={this.testButton.bind(this)}
        >Login Test Button</div>
      </div>
    )
  }
}
