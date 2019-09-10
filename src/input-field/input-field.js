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
         
        };
        this.handleInput = this.handleInput.bind(this);
       
      }
      

handleInput(event) {
  this.setState({
    //note that the replace strips whitespace from the input
    inputObj: {
      rawInput: event.target.value.replace(/\s+/g, ''),
      rawInputArray: [],
      validInput: false,
      arabicLettersOnly: "",
      arabicLettersOnlyArray: [],
      taaMarbutah: false,
      hamzah: false,
      alephHamzaMaddah
      strippedInput: "",
      strippedInputArray: [],
      score: {},

    }
  });
  console.log(this.state.rawInput);
}


    render() {
      return (
        <div className="">
            <h4 className="input-label">Input:</h4>
            <input name="mainInput" type="text" placeholder="Enter Arabic Text Here" className="main-input" onChange={this.handleInput}/>
            <InputValidator inputObj={this.state.inputObj}/>
           

        </div>
      );
    }
  }
  
  export default InputField;