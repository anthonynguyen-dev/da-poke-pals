import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from "../utils/queries";
import { Pokemon } from "../containers/pokemon";
import "./pokemonContainer.css"

// limits the amount of pokemon called by api
const gVariables = {
    limit: 12,
    offset: 1,
  };

export function Pokedex() { // WILL CHANGE THIS TO THE BACKEND API OF THE CAPTURED POKEMONS
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: gVariables,
    });

    return (
        <div className='pokemons' style= {{marginTop:"20px"}} >
            {pokemons && pokemons.results && pokemons.results.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />  )}
        </div>
    )
}