import React from "react";


export function Pokemon({ pokemon }) {
    console.log(pokemon)
    const style = {
        pokemonWrapper: {
            backgroundColor: 'lightgray',
            flex: '0 0 25%'
        }
    }
    return (
        <div className="pokemon" style={style.pokemonWrapper}>
            <div className="pokemonName">
                <p>{pokemon.name}</p>
            </div>

            <div className="pokemonImage">
                <img src={pokemon.image} alt="pokemon"></img>
            </div>
        </div>
    );
};


export default Pokemon;