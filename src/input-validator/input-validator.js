import React, { Component } from "react";


import InputCommentsBox from "../input-comments-box/input-comments-box";
import MainTests from "../tests/main-tests";


class InputValidator extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
         this.mainValidation = this.mainValidation.bind(this);
      }

// lengths is longer than zero

//Strip leading and trailing whitespace

//reject interior spaces

//limit to certain characters

mainValidation(rawInput) {
  
  console.log("the term being validated is " + rawInput)
  var lengthRawInput = rawInput.length
  console.log("input lenght is " + lengthRawInput)
  if (lengthRawInput > 0) {
  console.log("input is longer than 0")
  }
  // Is Arabic or not?
  if (/[\u0600-\u06ff]/.test(rawInput)) {
    console.log("This input is all Arabic")
  } else {
    console.log("the input contains non-Arabic characters")
  }
  if (/[\u0621-\u063A]|[\u0641-\u0652]/.test(rawInput)) {
    console.log("This input is Arabic, but may contain diacritics")
  } else {
    console.log("the input contains non-Arabic characters")
  }
  if (/[\u0641-\u0652]/.test(rawInput)) {
    console.log("The input contains Arabic diacritic")
  } else {
    console.log("the input does not contain diacritics")
  }
  if (/ة/.test(rawInput)) {
    console.log("The input contains a taa marbutah")
  } else {
    console.log("the input does not contain a taa marbutah")
  }
}







    render() {

      this.mainValidation(this.props.rawInput)


      return (
        <div className="">
            <p>Is the input valid?</p>
          
            <InputCommentsBox rawInput={this.props.rawInput}/>
            <MainTests rawInput={this.props.rawInput}/>
        </div>
      );
    }
  }
  
  export default InputValidator;