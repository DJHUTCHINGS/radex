import React, { Component } from "react";
import './score-display.css';

// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class ScoreDisplay extends Component {
    constructor(){
        super()
        this.state = {
        //   PROPERTY:'',
        //   PROP2:'DEFAULT'
        }
      }

    // METHODNAME = event => {
    // event.preventDefault()

    // .then( response => console.log(response))
    // }
    


    render() {
      return (
        <div className="score-display test">
            <h4>the score display is loaded</h4>
            <p>NOTE: This is for testing purposes only</p>
        </div>
      );
    }
  }
  
  export default ScoreDisplay;