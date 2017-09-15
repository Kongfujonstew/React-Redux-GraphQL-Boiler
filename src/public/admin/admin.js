import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';


export class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  toggleMemberLogin () {
    this.setState({
    });
  }

  render () {
    function graphQLFetcher(graphQLParams) {
      return fetch(window.location.origin + '/graphql', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams),
      }).then(response => response.json());
    }

    return (
      <GraphiQL fetcher={graphQLFetcher}/>
    );
  }
}

ReactDOM.render(<Admin/>, document.getElementById('main'));
