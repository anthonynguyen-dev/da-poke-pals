import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS, POKEMON_DETAILS } from "../utils/queries";
import { Pokemon } from "../containers/pokemon";
import "./pokemonContainer.css"

// limits the amount of pokemon called by api
const gVariables = {
    limit: 12,
    offset: 1,
  };



export function PokemonContainer({pokeSearch}) {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: gVariables,
    });

    const { data } = useQuery(POKEMON_DETAILS, {
        variables: {
            name:pokeSearch
        },
    });



    return (
        <div className='pokemons' >
            
            {pokeSearch!=="" ?  data && data.pokemon &&  <Pokemon pokemon={data.pokemon} key={data.pokemon.name} />  :
            pokemons && pokemons.results && pokemons.results.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />  )}
        </div>
    )
}