import React, { Component } from "react";
import './score-display.css';

import MainTests from "../tests/main-tests";


class ScoreDisplay extends Component {
    constructor(props){
        super(props)
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
        <div className="score-display">
            <h4>Score Display</h4>
            <p>NOTE: This is for testing purposes only</p>
            <p>The raw input is: {this.props.rawInput}</p>
        </div>
      );
    }
  }
  
  export default ScoreDisplay;