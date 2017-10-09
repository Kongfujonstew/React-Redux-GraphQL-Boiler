import { Environment, Network, RecordSource, Store} from 'relay-runtime';
import createNetwork from './network';

const source = new RecordSource();
const store = new Store(source);
const network = createNetwork();
const handlerProvider = null;

export default () => {
  return new Environment({
    handlerProvider,
    network,
    store,
  });
};
