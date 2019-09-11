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
        //the following needs to be updated
        // console.log(this.props.rawInput)
      return (
        <div className="">
            <h5>main test input received is: //need to get from inputObj. This will not be seen in final</h5>
            <OutputCharsBox />
            <OutputCommentsBox />
            <ScoreDisplay inputObj={this.props.inputObj}/>
        </div>
      );
    }
  }
  
  export default MainTests;