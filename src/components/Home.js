import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { login, logout, incrementNumber } from '../redux/actions/index';

class Container extends React.Component {
  testButton () {
    this.props.incrementNumber();
  }

  render () {
    return (
      <div>
        Home. this.props.num on redux store initializes at 6: {this.props.num}
        <div
          onClick={this.testButton.bind(this)}
        >Test Button - test increment store value num</div>
        <Link 
          to={`/test`}
        >Test link, travels to test via React Router</Link>
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
    logout: () => {dispatch(logout())},
    incrementNumber: () => {dispatch(incrementNumber())}
  };
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(Container);
