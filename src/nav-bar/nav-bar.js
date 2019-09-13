import React, { Component } from "react";
import './nav-bar.css';



// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class NavBar extends Component {
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
        <div className="nav-button">
            <h4 className="test">About</h4>
        </div>
      );
    }
  }
  
  export default NavBar;