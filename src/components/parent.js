import React from 'react';
import {render} from 'react-dom';

import {Child} from './child';


export class Parent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loggedIn: false,
    //   memberName: ''
    // }
  }

  // toggleMemberLogin () {
  //   this.setState({
  //     loggedIn: !this.state.loggedIn
  //   })
  // }

  // setMemberName (name) {
  //   console.log(name + ' loggedIn')
  //   this.setState({
  //     memberName: name
  //   })
  // }

  render () {
    return (
      <div>
        <div> Hello from Not Loggedin</div>
      </div>
    )
  }
}

