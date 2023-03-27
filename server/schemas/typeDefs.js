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
    name: String
    type: [String]
    description: String
    pokemonId: ID
    image: String
    moves: String
    abilites: String
    evolutions: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
`;

module.exports = typeDefs;
