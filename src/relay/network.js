import { Network } from 'relay-runtime';

import axios from 'axios';

const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
  return axios.post('/graphql', {
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => {
    return response.json();
  });
}

export default () => {
  console.log('creating network')
  return Network.create(fetchQuery);
};






//relay team code here ..............


// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
// function fetchQuery(
//   operation,
//   variables,
//   cacheConfig,
//   uploadables,
// ) {
//   return fetch('/graphql', {
//     method: 'POST',
//     headers: {
//       // Add authentication and other headers here
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       query: operation.text, // GraphQL text from input
//       variables,
//     }),
//   }).then(response => {
//     return response.json();
//   });
// }

// // Create a network layer from the fetch function
// const network = Network.create(fetchQuery);

// // Create an environment using this network:
// const environment = new Environment({
//   ..., // other options
//   network,
// });