import React, { Component } from "react";
import './header.css';

import NavBar from "../nav-bar/nav-bar"



// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class Header extends Component {
    // probably not needed here
    constructor(){
        super()
        this.state = {
        //   PROPERTY:'',
        //   PROP2:'DEFAULT'
        }
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