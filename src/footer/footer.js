import React, { Component } from "react";
import './footer.css';

// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class Footer extends Component {
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
        <div className="footer">
            <h1>Footer component is loaded</h1>
        </div>
      );
    }
  }
  
  export default Footer;