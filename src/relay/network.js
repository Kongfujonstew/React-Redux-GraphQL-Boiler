import { Network } from 'relay-runtime';
import axios from 'axios';

const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
  console.log('variables on fetchQuery: ', variables);
  console.log('operation . . .', operation);
  return axios.post('/graphql', {
    headers: {
      'content-type': 'application/json'
    },
    query: operation.text,
    variables, //this is empty; not sure why
  }).then(response => {
    return response.data;
  });
}

export default () => {
  return Network.create(fetchQuery);
};
