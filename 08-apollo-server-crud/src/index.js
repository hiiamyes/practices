const { ApolloServer, gql } = require("apollo-server");
const { find } = require("lodash/fp");

let items = [
  {
    title: "Backpack"
  },
  {
    title: "Tent"
  }
];

const typeDefs = gql`
  type Item {
    title: String
  }

  type Query {
    items(title: String): [Item]
  }

  type Mutation {
    addItem(title: String): Item
  }
`;

const resolvers = {
  Query: {
    items: (root, { title }) => {
      return items;
    }
  },
  Mutation: {
    addItem: (root, { title }) => {
      items.push({ title });
      return { title };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
