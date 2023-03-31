import { gql } from "@apollo/client";

export const ADD_POKEMON = gql`
  mutation addPokemon($name: String!, $image: String!) {
    addPokemon(name: $name, image: $image) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        password
        username
      }
    }
  }
`;

export const DELETE_POKEMON = gql`
  mutation DeletePokemon($pokemonId: ID!) {
    deletePokemon(pokemonId: $pokemonId) {
      _id
      username
      pokeDex {
        abilites
        description
        evolutions
        image
        moves
        name
        pokemonId
        type
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;
