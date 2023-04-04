import React, { useState } from "react";
import { PokemonContainer } from "../containers/pokemonContainer";
import "./landingpage.css";

function LandingPage() {
  const types = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fight",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];
  const [pokemonTypes, setPokemonTypes] = useState(types);
  const [searchPokemon, setSearchPokemon] = useState("")
  return (
    <div>
      <div className="search-container">
        <input
          type={"text"}
          placeholder={"Search..."}
          className="poke-search"
          value={searchPokemon}
          onChange={(e)=> {
            setSearchPokemon(e.target.value)
          }}
        />
      </div>
      <div className="pokemon-types-container">
        {pokemonTypes.map((type, index) => {
          return(<button key={index} className="type-icons-btns"><img src={require(`../assets/type-icons/${type}.png`)} /></button>)
        })}
      </div>
      <PokemonContainer pokeSearch={searchPokemon} />
    </div>
  );
}

export default LandingPage;
