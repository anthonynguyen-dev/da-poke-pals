import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'><img src={require("../assets/pokedex-logo.png")} width={"300px"}/></div>
    </div>
  )
}

export default Navbar