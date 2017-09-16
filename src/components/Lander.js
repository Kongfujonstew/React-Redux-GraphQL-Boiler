import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout } from '../redux/actions/index';

class Container extends React.Component {

  componentDidMount() {
    console.log('Lander mount, props: ', this.props)
    // console.log('getState: ', this.props.getState());
  }

  render () {
    return (
      <div>
        Hi this is Lander test prop num = {this.props.num} 
        <div>You are loggedIn: {this.props.loggedIn.toString()}</div>
        <div
          onClick={this.props.login}
        >Login</div>
        <div
          onClick={this.props.logout}
        >Logout</div>
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
