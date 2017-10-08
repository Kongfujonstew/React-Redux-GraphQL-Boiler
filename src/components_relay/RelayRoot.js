import React from 'react';
import { render } from 'react-dom';
import { QueryRenderer, graphql} from 'react-relay/compat';

// import { graphql } from 'graphql'

// import query from './__generated__/RelayRootQuery.graphql.js';

import environment from '../relay/environment';

export default () => {
  return <QueryRenderer
    environment={environment()}
    query={ graphql`query RelayRootQuery {count}`}

    variables={{placeholdervar: 5}}

    render={({error, props}) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <div>{'eh'} is great!</div>;
      }
      return <div>Loading</div>;
    }}
  />
}


