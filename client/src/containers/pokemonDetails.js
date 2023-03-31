import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { POKEMON_DETAILS } from "../utils/queries";
import { PokemonInfo } from "../containers/pokemonInfo";

const pokeName = {
    name: "squirtle",
};

export function PokemonDetails() {
    const { data: { pokemon = [] } = {} } = useQuery(POKEMON_DETAILS, {
        variables: pokeName,
    });

    return (
        <div className='pokemon' >
            {pokemon && pokemon.types && pokemon.types.map(pokemon => <PokemonInfo pokemon={pokemon} key={pokemon.type.name} />  )}
        </div>
    )
}
