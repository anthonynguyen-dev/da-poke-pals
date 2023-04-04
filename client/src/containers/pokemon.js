import React, { useState } from "react";
import "./pokemon.css";
import { useMutation } from "@apollo/client";
import { ADD_POKEMON } from "../utils/mutations";

export function Pokemon({ pokemon, have }) {
  const [captured, setCaptured] = useState(have);

  const [addPokemon, { error }] = useMutation(ADD_POKEMON);

  const onCaptureHandler = () => {
    if (!captured) {
      addPokemon({ variables: { pokemonData: {name: pokemon.name, image: pokemon.image }} });
    }
    setCaptured((prev) => !prev);
  };

  return (
    <div className="pokemon">
      <div className="pokemonName">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemonImage">
        {pokemon.image && <img src={pokemon.image} alt="pokemon"></img>}
      </div>
      {window.location.pathname === "/" && (
        <div className="captured-container">
          <p className={captured ? "captured-font" : ""}>Captured</p>
          <label class="switch">
            <input
              type="checkbox"
              onChange={() => onCaptureHandler()}
              checked={captured}
            />
            <span class="slider round"></span>
          </label>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
