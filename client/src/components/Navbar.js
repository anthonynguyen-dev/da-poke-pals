import React from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
 
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <div  className="pokedex-logo">
          { window.location.pathname ==="/pokedex" && <span>MY</span> }
          <img
         
            src={require("../assets/pokedex-logo.png")}
            width={"300px"}
            onClick ={ ()=> {
              window.location.replace('/')
            }}
          />
        </div>

        <img src={require("../assets/pokedex-icon.png")} width={"125px"} onClick ={ ()=> {
          window.location.replace('/pokedex')
        }} />
      </div>
    </div>
  );
}

export default Navbar;
