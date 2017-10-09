import React from 'react';
import { render } from 'react-dom';
import { QueryRenderer, graphql} from 'react-relay/compat';
import createEnvironment from '../relay/environment';
const environment = createEnvironment();

export default () => {
  //variables attr line 13 NOT correctly passed to fetchQuery in network.js ???
  return <QueryRenderer
    environment={environment}
    query={ graphql`query RelayRootQuery {count}`}

    variables={{placeholder: 'value'}}

    render={({error, props}) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        console.log('this is props: ', props);
        return <div>RelayRoot. Relay performs a graphql 'count' query, this should be 2: {props.count}</div>;
      }
      return <div>Loading</div>;
    }}
  />
}


