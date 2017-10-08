import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';

let count = 7;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RelayRootQuery',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: function() {
          return count;
        }
      }
    }
  })
});

export default schema;
