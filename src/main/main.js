import React, { Component } from "react";
import './main.css';

import InputField from "../input-field/input-field";
import OutputCharsBox from "../output-chars-box/output-chars-box";
import OutputChar from "../output-char/output-char";
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import SampleText from "../sample-text/sample-text";

class Main extends Component {
    // probably not needed here
    constructor(props){
        super(props)
      }
    render() {
      return (
        <div className="main">
          <InputField />
          <SampleText />
        </div>
      );
    }
  }
  
  export default Main;