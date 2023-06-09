import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS, POKEMON_DETAILS, GET_MY_POKEMON } from "../utils/queries";

import { Pokemon } from "../containers/pokemon";
import "./pokemonContainer.css";
import { render } from "react-dom";

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

  const [capturedPokemon, setCapturedPokemon] = React.useState([]);

  const { data: myData } = useQuery(GET_MY_POKEMON);

  
  React.useEffect(() => {
    console.log(myData?.me?.pokeDex);
    if (myData) {
        setCapturedPokemon(myData.me.pokeDex.map(pokemon => pokemon.name));
      }
  }, [myData])

 
  let pokemonData;

  const { data: searchedPokemonData } = useQuery(POKEMON_DETAILS, {
    variables: {
      name: pokeSearch,
    },
    context: { clientName: "pokemonApi" },
  });

  if (
    pokeSearch !== "" &&
    searchedPokemonData &&
    searchedPokemonData.pokemon.id
  ) {
    pokemonData = {
      name: searchedPokemonData.pokemon.name,
      image: searchedPokemonData.pokemon.sprites.front_default,
    };

    return (
      <div className="pokemons">
        <Pokemon pokemon={pokemonData} key={pokemonData} have={capturedPokemon.includes(pokemonData.name)} />
      </div>
    );
  }

  return (
    <div className="pokemons">
      {pokemons &&
        pokemons.results &&
        pokemons.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} have={capturedPokemon.includes(pokemon.name)} />
        ))}
    </div>
  );
}
