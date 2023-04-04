const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    pokeDex: [Pokemon]
  }

  type Pokemon {
    name: String
    types: [String]
    description: String
    pokemonId: ID
    image: String
    moves: [String]
    abilites: [String]
    evolutions: [String]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    getMyPokemons: [Pokemon]
  }

  input PokemonInput {
    name: String!
    description: String
    types: [String]
    image: String!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPokemon(pokemonData: PokemonInput!): User
    deletePokemon(pokemonId: ID!): User
  }
`;

module.exports = typeDefs;
