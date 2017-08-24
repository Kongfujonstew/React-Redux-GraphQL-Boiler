import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLoggedInStatus } from '../redux/actions/index';
import { Parent } from './Parent';
import { Child } from './child';

class Container extends React.Component {
  render () {
    return (
      <div
      >
        <div> Hello from RootContainer</div>
        { this.props.loggedIn ?
          <Child /> :
          <Parent />
        }
        <div
          onClick={this.props.login}
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

export const Tester = connect(mapStateToProps, mapDispatchToProps)(Container);

// export default Tester;
