import React from 'react';
import { render } from 'react-dom';
import { QueryRenderer, graphql } from 'react-relay';

export default () => {
  return <QueryRenderer
    environment={environment}
    query={graphql`
      query ExampleQuery($pageID: ID!) {
        page(id: $pageID) {
          name
        }
      }
    `}
    variables={{
      pageID: '110798995619330',
    }}
    render={({error, props}) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <div>{props.page.name} is great!</div>;
      }
      return <div>Loading</div>;
    }}
  />
};

