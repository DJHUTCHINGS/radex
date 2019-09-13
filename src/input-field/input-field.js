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
            // rawInputArray: [],
            // rawInputLength: 0,
            // arabicUniBlock: false,
            // arabicWithDiacritics: false,
            // diacritics: false,
            // validInput: false,
            // arabicLettersOnly: "Default - not valid Arabic",
            // arabicLettersOnlyArray: [],
            // taaMarbutah: false,
            // anyHamzah: false,
            // alephHamzahMaddah: false,
            // strippedInput: "Default - not valid arabic",
            // strippedInputArray: [],
            // score: {},
      
        
         
        };
        this.handleInput = this.handleInput.bind(this);
       
      }
      

handleInput(event) {
  //input is cleared of white space
  var rawInput = event.target.value.replace(/\s+/g, '')
  console.log("raw input at input field is " + rawInput)

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

