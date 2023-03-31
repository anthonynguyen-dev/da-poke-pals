import React from "react";
import "./pokemon.css";

export function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemonName">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemonImage">
        <img src={pokemon.image} alt="pokemon"></img>
      </div>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default Pokemon;
