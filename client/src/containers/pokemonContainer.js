import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from "../utils/queries";
import { Pokemon } from "../containers/pokemon";

const gVariables = {
    limit: 12,
    offset: 1,
  };

export function PokemonContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: gVariables,
    });

    return (
        <div className='pokemons'>
            {console.log(pokemons)}
        </div>
    )
}