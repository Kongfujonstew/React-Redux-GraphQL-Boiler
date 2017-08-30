import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout } from '../redux/actions/index';

class Container extends React.Component {
  render () {
    return (
      <div
      >
        <div> Hello from LoggedIn status Tester</div>
        { this.props.loggedIn ?
          <div>LoggedIN</div> :
          <div>Not logged In</div>
        }
        <div
          onClick={() => console.log('this should be this.props.login')}
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
    // login: () => {dispatch(login())},
    login: () => {() => {console.log('hi')}},
    logout: () => {dispatch(logout())}
  };
}

export const Tester = connect(mapStateToProps, mapDispatchToProps)(Container);

// export default Tester;
