import React from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_MY_POKEMON, GET_POKEMONS } from "../utils/queries";
import { Pokemon } from "../containers/pokemon";
import "./pokemonContainer.css";

// limits the amount of pokemon called by api
const gVariables = {
  limit: 12,
  offset: 1,
};

export function Pokedex() {
  //WILL CHANGE THIS TO THE BACKEND API OF THE CAPTURED POKEMONS
  //   const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
  //     variables: gVariables,
  //     context: { clientName: "pokemonApi" },
  //   });
  const { data } = useQuery(GET_MY_POKEMON);

  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    if (data) setPokemons(data.me.pokeDex);
  }, [data]);

  return (
    <div className="pokemons" style={{ marginTop: "20px" }}>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
    </div>
  );
}
