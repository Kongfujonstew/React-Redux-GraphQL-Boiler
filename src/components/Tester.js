import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout } from '../redux/actions/index';

class Container extends React.Component {


  moveSomewhere () {
    console.log('moveSomewhere fired')
  }

  render () {
    return (
      <div>
        <div> Hello from  Tester</div>
        <div onClick={this.moveSomewhere.bind(this)}> click here to login </div>
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
