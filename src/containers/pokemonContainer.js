import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from "../Utils/queries";
import { Pokemon } from "../components/pokemon";

export const PokemonContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: 10 },
    });

    return (
        <div className='pokemons'>
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}