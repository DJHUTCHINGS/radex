import React, { Component } from "react";



import OutputCharsBox from "../output-chars-box/output-chars-box";
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import ScoreDisplay from "../score-display/score-display";

class MainTests extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
      }

 
    render() {
        console.log("At Main Tests now")
        console.log(this.props.rawInput)
      return (
        <div className="">
            <h5>main test input received is: {this.props.rawInput}. This will not be seen in final</h5>
            <OutputCharsBox />
            <OutputCommentsBox />
            <ScoreDisplay rawInput={this.props.rawInput}/>
        </div>
      );
    }
  }
  
  export default MainTests;