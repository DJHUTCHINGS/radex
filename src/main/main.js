import React, { Component } from "react";
import './main.css';


import InputField from "../input-field/input-field";
import InputCommentsBox from "../input-comments-box/input-comments-box";
import InputComment from "../input-comment/input-comment";
import OutputCharsBox from "../output-chars-box/output-chars-box";
import OutputChar from "../output-char/output-char";
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import OutputComment from "../output-comment/output-comment";

import ScoreDisplay from "../score-display/score-display";


class Main extends Component {
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
        <div className="">
          
           
           <InputField />
           <InputCommentsBox />
           <InputComment />
           <OutputCharsBox />
           <OutputChar />
           <OutputCommentsBox />
           <OutputComment />
           
           <ScoreDisplay />
        </div>
      );
    }
  }
  
  export default Main;