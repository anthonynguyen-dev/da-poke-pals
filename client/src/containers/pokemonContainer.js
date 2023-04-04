import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS, POKEMON_DETAILS } from "../utils/queries";

import { Pokemon } from "../containers/pokemon";
import "./pokemonContainer.css";

// limits the amount of pokemon called by api
const gVariables = {
  limit: 1000,
  offset: 1,
};

export function PokemonContainer({ pokeSearch }) {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: gVariables,
    context: { clientName: "pokemonApi" },
  });

  const { data } = useQuery(POKEMON_DETAILS, {
    variables: {
      name: pokeSearch,
    },
    context: { clientName: "pokemonApi" },
  });

  console.log("pokemon");
  console.log(data);

  const pokemonData = {
    name: data.pokemon.name,
    image: data.pokemon.sprites.front_default,
  };
  return (
    <div className="pokemons">
      {pokeSearch !== ""
        ? data &&
          data.pokemon && <Pokemon pokemon={pokemonData} key={pokemonData} />
        : pokemons &&
          pokemons.results &&
          pokemons.results.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.name} />
          ))}
    </div>
  );
}
