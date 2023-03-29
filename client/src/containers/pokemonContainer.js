import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from "../utils/queries";
import { Pokemon } from "../containers/pokemon";

export const PokemonContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: 10 },
    });

    return (
        <div className='pokemons'>
            {pokemons && pokemons.map(pokemon =>
                <Pokemon key={pokemon.id} pokemon={pokemon} // do i use name or pokemon here? - serg
                    // title={pokemon} Will using <Pokemon/> populate this div with pokemon.js os should i use title, image, url - serg
                    // image={image}
                    // url={url}
                />)}
        </div>
    )
}