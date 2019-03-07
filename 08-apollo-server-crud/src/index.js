require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const { find, findIndex } = require("lodash/fp");

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
    id: ID
    title: String
  }

  type Query {
    items(title: String): [Item]
  }

  type Mutation {
    addItem(title: String): Item
    updateItem(id: ID, title: String): Item
    deleteItem(title: String): Item
  }
`;

const resolvers = {
  Query: {
    items: (root, { title }) => {
      // SELECT * FROM items;
      return items;
    }
  },
  Mutation: {
    addItem: (root, { title }) => {
      // INSERT INTO items (title) VALUES ('Backpack');
      items.push({ title });
      return { title };
    },
    updateItem: (root, { id, title }) => {
      // UPDATE items SET title = title WHERE id = id;
      findIndex;
      return { title };
    },
    // UPDATE items SET disable = TRUE WHERE id = 1;
    deleteItem: (root, { id }) => {
      findIndex;
      return { id };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  const { Pool } = require("pg");
  const pool = new Pool();
  (async () => {
    // const client = await pool.connect();
    // try {
    console.log("====================================");
    console.log("Database ready");
    console.log("====================================");
    // } finally {
    // client.release();
    // }
  })().catch(e => {
    console.log("gg:", e.stack);
  });
});
