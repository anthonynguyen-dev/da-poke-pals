import React from "react";
import './card.css'

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

function Pokemonss({ pokemon, image, url }) { //calling it pokemonss so an error isnt thrown
    return (
        <div className="card-container">
            <div className="name-container">
                <h3>{pokemon}</h3> {/* or pokemon.name? */}
            </div>

            <div className="image-container">
                <img src={image} alt={pokemon} />
            </div>

            <div className="url-container">
                <h3>{url}</h3>
            </div>

            <div className="btn"> {/* adding a button for somthing later */}
                <button>
                    <a>
                        Button for somthing...
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Pokemon;