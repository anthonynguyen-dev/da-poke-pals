const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    pokeDex: [Pokemon]
  }

  type Pokemon {
    type: [String]
  }
`;
