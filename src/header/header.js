import React, { Component } from "react";
import './header.css';
import NavBar from "../nav-bar/nav-bar"

class Header extends Component {

    constructor(){
        super()
      }

    render() {
      return (
        <div className="header">
            <h1>Radical Exploder</h1>
            <NavBar />
        </div>
      );
    }
  }
  
  export default Header;