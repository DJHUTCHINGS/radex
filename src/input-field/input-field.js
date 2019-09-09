import React, { Component } from "react";
import './input-field.css';

// import InputCommentsBox from "../input-comments-box/input-comments-box";
import InputValidator from "../input-validator/input-validator";


// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class InputField extends Component {
    constructor(props){
        super(props)
        this.state = {
          rawInput: "",
          valid: true,
        };
        this.handleInput = this.handleInput.bind(this);
      }


handleInput(event) {
  this.setState({
    rawInput: event.target.value,
  });
  console.log(this.state.rawInput);
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