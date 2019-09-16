import React, { Component } from "react";
import './main.css';
import InputField from "../input-field/input-field";
import SampleText from "../sample-text/sample-text";

class Main extends Component {
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