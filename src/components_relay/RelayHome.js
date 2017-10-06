import { createFragmentContainer } from 'react-relay';

import { Home } from '../components/Home';

createFragmentContainer(TodoItem, {
  item: graphql`
    fragment TodoItem_item on Todo {
      text
      isComplete
    }
  `,
});

