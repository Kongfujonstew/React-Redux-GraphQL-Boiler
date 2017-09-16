import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';


class Admin extends React.Component {
  render () {
    function graphQLFetcher(graphQLParams) {
      return fetch(window.location.origin + '/graphql', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams),
      }).then(response => response.json());
    }

    const testoStyle = {
      display: 'none',
      width: '25%',
      height: '100%'
    };

    return (
      <GraphiQL style={testoStyle} fetcher={graphQLFetcher}/>
    );
  }
}

ReactDOM.render(<Admin/>, document.getElementById('admin'));
