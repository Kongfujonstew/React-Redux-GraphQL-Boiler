import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLoggedInStatus } from '../redux/actions/index';

import { Parent } from './parent';
import { Child } from './child';


class RootContainer extends React.Component {
  consoleSomething () {
    console.log(this.props);
    this.props.login();
  }

  render () {
    return (
      <div>
        <div> Hello from Root, props.loggedIn = {this.props.number}</div>
        { this.props.loggedIn ?
          <Child /> :
          <Parent />
        }
        <div
          onClick={this.consoleSomething.bind(this)}
        >Click to login
        </div>
        <div
          onClick={this.props.logout}
        >Click to log out
        </div>
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
    login: () => {dispatch(changeLoggedInStatus('LOGIN'))},
    logout: () => {dispatch(changeLoggedInStatus('LOGOUT'))}
  };
}

const RootContainerConnect = connect(mapStateToProps, mapDispatchToProps)(RootContainer);

export default RootContainerConnect;