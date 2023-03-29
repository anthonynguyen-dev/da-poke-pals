import { gql } from '@apollo/client';

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
