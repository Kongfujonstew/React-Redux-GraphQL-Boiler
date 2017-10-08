import { Environment, Network, RecordSource, Store} from 'relay-runtime';
import createNetwork from './network';


const source = new RecordSource();
const store = new Store(source);
const network = createNetwork();
const handlerProvider = null;

var testo = new Environment({
  handlerProvider,
  network,
  store,
  // createOperationSelector: () => {return};
});


console.log('testo.cOS exists: ', !!testo);

// export default new Environment({
//   handlerProvider,
//   network,
//   store,
// });

// console.log('Environment: ', Environment)

export default () => {
  return new Environment({
    handlerProvider,
    network,
    store,
  });
};
