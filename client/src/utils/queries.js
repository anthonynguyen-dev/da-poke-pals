import React from "react";
import { gql, useQuery } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
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

export const USER_QUERY = gql`
  query Me {
    me {
      _id
      email
      pokeDex {
        name
        pokemonId
      }
      username
    }
  }
`;

export const POKEMON_DETAILS = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
}
`;