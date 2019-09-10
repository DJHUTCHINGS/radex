import React, { Component } from "react";


import InputCommentsBox from "../input-comments-box/input-comments-box";
import BasicTests from "../tests/basic-tests";


class InputValidator extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
         this.mainValidation = this.mainValidation.bind(this);
      }



//orinal main validation:
mainValidation(input) {



  

  }
  


    render() {

      this.mainValidation(this.props.inputObj)


      return (
        <div className="">
            <p>Is the input valid?</p>
          
            <InputCommentsBox inputObj={this.props.inputObj}/>
            <BasicTests inputObj={this.props.inputObj}/>
        </div>
      );
    }
  }
  
  export default InputValidator;


















  
// //orinal main validation:
// mainValidation(rawInput) {

//   //Split all incoming into validInputArray
//     let validInputArray = rawInput.split("");
//     console.log("The incoming array is below:")
//     console.log(validInputArray)
  
//     console.log("the term being validated is " + rawInput)
//     var lengthRawInput = rawInput.length
//     console.log("input length is " + lengthRawInput)
//     if (lengthRawInput > 0) {
//     console.log("input is longer than 0")
//     }
//     // Is Arabic or not?
//     if (/[\u0600-\u06ff]/.test(rawInput)) {
//       console.log("This input is all Arabic characters")
//       var arabicUniBlock = true;
//     } else {
//       console.log("the input contains non-Arabic letters")
//       var arabicUniBlock = false;
//     }
//     if (/[\u0621-\u063A]|[\u0641-\u0652]/.test(rawInput)) {
//       console.log("This input is Arabic, but may contain diacritics")
//       var arabicWithDiacritics = true;
//     } else {
//       console.log("the input contains non-Arabic letters")
//       var arabicWithDiacritics = false;
//     }
//     if (/[\u064B-\u0652]/.test(rawInput)) {
//       console.log("The input contains Arabic diacritic")
//       var diacritics = true;
//     } else {
//       console.log("the input does not contain diacritics")
//       var diacritics = false;
//     }
  
//     //hamzah tests
//     if (/[\u0621-\u0626]/.test(rawInput)) {
//       console.log("The input contains some kind of hamzah")
//       var anyHamzah = true;
//     } else {
//       console.log("the input does not contain any kind of hamzah")
//       var anyHamzah = false;
//     }
  
//     if (/[\u0622-\u0623]|[\u0625]/.test(rawInput)) {
//       console.log("The input contains an aleph with hamzah or madda")
//       var alephHamzahMaddah = true;
//     } else {
//       console.log("the input does not contain an aleph with hamzah or madda")
//       var alephHamzahMaddah = false;
//     }
//   //taa marbutah test
//     if (/ة/.test(rawInput)) {
//       console.log("The input contains a taa marbutah")
//       var taaMarbutah = true;
//     } else {
//       console.log("the input does not contain a taa marbutah")
//       var taaMarbutah = false;
//     }
  
  
//     //strip out diacritics
//   if (arabicWithDiacritics === true && diacritics === true) {
   
//     console.log("the input was split into the following array")
//     console.log(validInputArray)
//     for (let i = 0; i < validInputArray.length+1; i++) {
//       console.log(validInputArray[i])
//       if (/[\u064B-\u0652]/.test(validInputArray[i])) {
//         validInputArray.splice(i, 1);
//       }
      
//     }
//     console.log(validInputArray)
//   }
  
  
//   //if (arabicWithDiacritics === true && diacritics === false && taaMarbutah === true) - strip taa marbutah and save as strippedInput
  
//   //Need to make sure all these tests above don't allow non-Arabic characters - - make a test that says that if anything is outside of the range of Arabic characters it is blocked
  
//   if (arabicUniBlock === false || arabicWithDiacritics === false) {
//     var invalidInput = rawInput
//     var strippedInput = ""
//     var inputNoDiacritics = ""
//     if (lengthRawInput > 0) {
//       console.log(invalidInput + " is not valid input")
//     }  
//   }
  
//   //a script to normalize alephs
//   if (alephHamzahMaddah === true) {
    
//     for (let i = 0; i < validInputArray.length+1; i++) {
//       console.log(validInputArray[i])
//       if (/[\u0622-\u0623]|[\u0625]/.test(validInputArray[i])) {
//         validInputArray.splice(i, 1, "ا");
//       }
//   }
//   console.log("input with normalized aleph:")
//   console.log(validInputArray)
//   }
  
  
//   }
  