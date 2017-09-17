import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout } from '../redux/actions/index';

class Container extends React.Component {


  moveSomewhere () {
    console.log('moveSomewhere fired')
  }

  goBack () {
    history.back();
  }

  getState () {
    if (window) {
      console.log(window.applicationCache);
    } else {
      console.log('hahah!');
    }
  }

  render () {
    return (
      <div>
        <div> Hello from  Tester</div>
        <div
          onClick={this.getState.bind(this)}
        >Push State</div>
        <div onClick={() => {console.log('hi')}}> click here to login </div>
        <div
          onClick={this.goBack.bind(this)}
        >Go Back</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    number: state.number
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // login: () => {dispatch(login())},
    login: () => {console.log('hi')},
    logout: () => {dispatch(logout())}
  };
}

export const Tester = connect(mapStateToProps, mapDispatchToProps)(Container);

// export default Tester;
