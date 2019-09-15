import React, { Component } from "react";
import InputCommentsBox from "../input-comments-box/input-comments-box";
import BasicTests from "../tests/basic-tests";

class InputValidator extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
         this.mainValidation = this.mainValidation.bind(this); 
      }

mainValidation(rawInput) {
  if (rawInput !== undefined) {
    var rawInputLength = rawInput.length
    if (rawInput.length > 0) {
      var rawInputArray = rawInput.split("")
      var arabicOnlyArray = []
      //test each letter for arabic
      for (let i = 0; i < rawInputArray.length; i++) {
        let character = rawInputArray[i]
        //arabic test
        if (/[\u0600-\u06ff]/.test(character)) {
        arabicOnlyArray.push(character)
        }
      //end of Arabic stripper
      }
      //strip diacritics 
      var inputNoDiacritics = []
      for (let i = 0; i < arabicOnlyArray.length; i++) {
        if (/[\u064B-\u0652]|[\u0670]/.test(arabicOnlyArray[i])) {
          console.log("ignoring a diacritic")
        } else {
          inputNoDiacritics.push(arabicOnlyArray[i])
        }
      }

      //strip taa marbutah
      var inputNoTaaMarbutah = []
      var taaMarbutah = false;
      for (let i = 0; i < inputNoDiacritics.length; i++) {
        if (/ة/.test(inputNoDiacritics[i])) {
          taaMarbutah = true;
        } else {
          inputNoTaaMarbutah.push(inputNoDiacritics[i])
        }
      }
     
      //normalize hamzah
      var inputNormalizedHamzah = []
      var anyHamzah = false;
      var alephHamzahMaddah = false;
      for (let i = 0; i < inputNoTaaMarbutah.length; i++) {
        if (/[\u0622-\u0623]|[\u0625]/.test(inputNoTaaMarbutah[i])) {
          inputNormalizedHamzah.push("ا")
          anyHamzah = true;
          alephHamzahMaddah = true;
        } else {
          inputNormalizedHamzah.push(inputNoTaaMarbutah[i])
        }
      }
      
var strippedInputArray = inputNormalizedHamzah
var strippedInput = strippedInputArray.join("")
    }
  }

var inputObj = {
    rawInput: rawInput,
    rawInputArray: rawInputArray,
    rawInputLength: rawInputLength,
    arabicUniBlock: false,
    arabicWithDiacritics: false,
    diacritics: false,
    validInput: false,
    arabicOnlyArray: arabicOnlyArray,
    taaMarbutah: taaMarbutah,
    anyHamzah: anyHamzah,
    alephHamzahMaddah: alephHamzahMaddah,
    strippedInput: strippedInput,
    strippedInputArray: strippedInputArray,
    score: [],
  }

return inputObj
};
    render() {
      let inputObj = this.mainValidation(this.props.rawInput)
        return (
          <div className="">        
              <InputCommentsBox inputObj={inputObj}/>
              <BasicTests inputObj={inputObj}/>
          </div>
        );
    }
  }
  
  export default InputValidator;
