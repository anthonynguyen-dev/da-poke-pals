import React from "react";


export function PokemonInfo({ pokemon }) {
    
    const style = {
        pokemonWrapper: {
            
            flex: '0 0 75%'
        }
    }
    return (
        <div className="pokemon" style={style.pokemonWrapper}>
          
            <div className="pokemonType">
                <p>{pokemon.type.name}</p>
            </div>
        </div>
    );
};


export default PokemonInfo;