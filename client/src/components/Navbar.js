import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img  className="pokedex-logo" src={require("../assets/pokedex-logo.png")} width={"300px"}/>
        <img src={require("../assets/pokedex-icon.png")} width={"125px"} />
        </div>
    </div>
  )
}

export default Navbar