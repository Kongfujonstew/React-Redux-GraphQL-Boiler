import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { login, logout } from '../redux/actions/index';
import navigation from '../navigation/index';

class Container extends React.Component {

  componentDidMount() {

  }

  testButton () {
    console.log('Login test button fired');
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
        Login 
        <div>You are loggedIn: {this.props.loggedIn.toString()}</div>
        <form>
          <input type="text" />
          <br />
          <input type="text" />
        </form>
        <div
          onClick={this.props.login}
        >Login</div>
        <div
          onClick={this.props.logout}
        >Logout</div>
        <div
          onClick={this.testButton.bind(this)}
        >Login Test Button</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => {dispatch(login())},
    logout: () => {dispatch(logout())}
  };
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(Container);
