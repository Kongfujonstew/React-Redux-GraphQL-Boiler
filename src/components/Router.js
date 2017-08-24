import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Tester } from './Tester';
import { Parent } from './Parent';


export class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Tester} />
          <Route path="/parent" component={Parent} />
        </Switch>
      </BrowserRouter>
    )
  }
}



  