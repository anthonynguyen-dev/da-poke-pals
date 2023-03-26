import React from "react";

export function Pokemon({ pokemon }) {
    return (
        <div className="pokemon">
            <div className="pokemonName">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemonHP">
                <p>{pokemon.hp}</p>
            </div>
            <div className="pokemonImage">
                <p>{pokemon.image}</p>
            </div>
        </div>
    );
}; 