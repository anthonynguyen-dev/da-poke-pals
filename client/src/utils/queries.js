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
