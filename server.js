const { ApolloServer } = require('apollo-server');
require('dotenv').config();

// Import Resolvers and Schema
const { resolvers } = require('./graphql/resolvers/index.js');
const { typeDefs } = require('./graphql/schema/schema.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    reportSchema: true,
    variant: 'current',
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
