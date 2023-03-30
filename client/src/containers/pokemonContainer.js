import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from "../utils/queries";
import { Pokemon } from "../containers/pokemon";

// limits the amount of pokemon called by api
const gVariables = {
    limit: 12,
    offset: 1,
  };

export function PokemonContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: gVariables,
    });

    return (
        <div className='pokemons' >
            {pokemons && pokemons.results && pokemons.results.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />  )}
        </div>
    )
}