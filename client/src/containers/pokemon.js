import React,{useState} from "react";
import "./pokemon.css";

export function Pokemon({ pokemon }) {
    const [captured, setCaptured] =useState(false)
    console.log(captured)
  return (
    <div className="pokemon">
      <div className="pokemonName">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemonImage">
        <img src={pokemon.image} alt="pokemon"></img>
      </div>
      <div className="captured-container">
        <p className={captured ? "captured-font" : ""}>Captured</p>
        <label class="switch">
          <input type="checkbox" onChange={()=> setCaptured(!captured)} checked={captured} />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Pokemon;
