import React, { Component } from "react";
import './input-field.css';
import InputValidator from "../input-validator/input-validator";

class InputField extends Component {
    constructor(props){
        super(props)
        this.state = {
            rawInput: "",
        };
        this.handleInput = this.handleInput.bind(this);
       
      }

handleInput(event) {
  //input is cleared of white space
  var rawInput = event.target.value.replace(/\s+/g, '')
  this.setState({
  rawInput: rawInput,
  })
}

    render() {
      return (
        <div className="">
            <h4 className="input-label">Input:</h4>
            <input name="mainInput" type="text" placeholder="Enter Arabic Text Here" className="main-input" onChange={this.handleInput}/>
            <InputValidator rawInput={this.state.rawInput}/>
        </div>
      );
    }
  }
  
  export default InputField;

