import React from 'react';
import {render} from 'react-dom';

import {Child} from './child';


export class Parent extends React.Component {
  render () {
    return (
      <div>
        <div> Hello from Parent - Not Loggedin</div>
      </div>
    )
  }
}
