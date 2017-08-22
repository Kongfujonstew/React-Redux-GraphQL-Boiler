import React from 'react';
import {render} from 'react-dom';


export class Child extends React.Component {
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
      <div> Hello from loggedIn</div>
    )
  }

}