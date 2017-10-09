import { createFragmentContainer } from 'react-relay';
import { Home } from '../components/Home';
import { QueryRenderer, graphql} from 'react-relay/compat';

//For next step start here!!
//This component causes an error when rendered (haven't looked into why)

const Relay_Home = createFragmentContainer(Home, {
  // initialVariables: {
  //   size: 32
  // },
  fragments: {
    count: () => Relay.QL`
      query Relay_HomeQuery {
        count
      }
    `,
  },
});

export default Relay_Home;
