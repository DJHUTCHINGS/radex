import React, { Component } from "react";

import OutputCharsBox from "../output-chars-box/output-chars-box";
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import ScoreDisplay from "../score-display/score-display";
import MainTests from "./main-tests"

class BasicTests extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
      }

 
    render() {
        console.log("At Basic Tests now")
        console.log(this.props.inputObj)
      return (
        <div className="">
            <h5>at basic tests and awaiting modification </h5>
            <MainTests />
            <OutputCharsBox />
            <OutputCommentsBox />
            <ScoreDisplay inputObj={this.props.inputObj}/>
        </div>
      );
    }
  }
  
  export default BasicTests;