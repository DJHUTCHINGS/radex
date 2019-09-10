import React, { Component } from "react";
import './main.css';

import InputField from "../input-field/input-field";
import OutputCharsBox from "../output-chars-box/output-chars-box";
import OutputChar from "../output-char/output-char";
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import OutputComment from "../output-comment/output-comment";

// import ScoreDisplay from "../score-display/score-display";

class Main extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {
        //   PROPERTY:'',
        //   PROP2:'DEFAULT'
        }
      }

 

    render() {
      return (
        <div className="main">
          
           
           <InputField />

           <OutputCharsBox />
           <OutputChar />
           <OutputCommentsBox />
           <OutputComment />
   
        </div>
      );
    }
  }
  
  export default Main;