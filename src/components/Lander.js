import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { login, logout } from '../redux/actions/index';
import navigation from '../navigation/index';

import { Login } from './Login';

class Container extends React.Component {

  componentDidMount() {

  }

  testButton () {
    console.log('goToTester fired');
    // console.log('history length: ', history.length);
    // console.log('state: ', window.history.state);
    // history.pushState({hello: "hello"}, null, 'http://localhost:8081/dragons');
    // window.location = 'http://localhost:8081/test';
    // window.history.go('http://localhost:8081/test');
    // console.log('state again: ', window.history.state);
  }

  goToTest () {
    navigation.navigateTo('http://localhost:8081/test');
  }

  goBack () {
    navigation.back();
  }

  render () {
    return (
      <div>
        Hi this is Lander test prop num = {this.props.num} 
        <Login />
        <div
          onClick={this.testButton.bind(this)}
        >Test Butto</div>
        <div
          onClick={this.goToTest.bind(this)}
        >Go To Test now</div>
        <div
          onClick={this.goBack.bind(this)}
        >Go Back</div>
        <Link 
          to={`/test`}
        >Here is a link</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    num: state.num
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => {dispatch(login())},
    logout: () => {dispatch(logout())}
  };
}

export const Lander = connect(mapStateToProps, mapDispatchToProps)(Container);
