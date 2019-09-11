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
            rawInputArray: [],
            rawInputLength: 0,
            arabicUniBlock: false,
            arabicWithDiacritics: false,
            diacritics: false,
            validInput: false,
            arabicLettersOnly: "Default - not valid Arabic",
            arabicLettersOnlyArray: [],
            taaMarbutah: false,
            anyHamzah: false,
            alephHamzahMaddah: false,
            strippedInput: "Default - not valid arabic",
            strippedInputArray: [],
            score: {},
      
        
         
        };
        this.handleInput = this.handleInput.bind(this);
       
      }
      

handleInput(event) {
  //note that the replace strips whitespace from the input
  var rawInput = event.target.value.replace(/\s+/g, '')
  var rawInputArray = rawInput.split("");
  var rawInputLength = rawInputArray.length;
  
      // Is Arabic or not?
    if (/[\u0600-\u06ff]/.test(rawInput)) {
      console.log("This input is all Arabic characters")
      var arabicUniBlock = true;
    } else {
      console.log("the input contains non-Arabic letters")
      var arabicUniBlock = false;
    }

        if (/[\u0621-\u063A]|[\u0641-\u0652]/.test(rawInput)) {
      console.log("This input is Arabic, but may contain diacritics")
      var arabicWithDiacritics = true;
    } else {
      console.log("the input contains non-Arabic letters")
      var arabicWithDiacritics = false;
    }

    if (/[\u064B-\u0652]/.test(rawInput)) {
      console.log("The input contains Arabic diacritic")
      var diacritics = true;
    } else {
      console.log("the input does not contain diacritics")
      var diacritics = false;
    }

    //hamzah tests
    if (/[\u0621-\u0626]/.test(rawInput)) {
      console.log("The input contains some kind of hamzah")
      var anyHamzah = true;
    } else {
      console.log("the input does not contain any kind of hamzah")
      var anyHamzah = false;
    }
  
    if (/[\u0622-\u0623]|[\u0625]/.test(rawInput)) {
      console.log("The input contains an aleph with hamzah or madda")
      var alephHamzahMaddah = true;
    } else {
      console.log("the input does not contain an aleph with hamzah or madda")
      var alephHamzahMaddah = false;
    }


  //taa marbutah test
    if (/ة/.test(rawInput)) {
      console.log("The input contains a taa marbutah")
      var taaMarbutah = true;
    } else {
      console.log("the input does not contain a taa marbutah")
      var taaMarbutah = false;
    }


  
    //strip out diacritics
    var strippedInputArray = rawInputArray
    var strippedInput = rawInput;


   var stripper = function() {
      if (diacritics === true) {
        console.log("stripping diacritics...")
        for (let i = 0; i < strippedInputArray.length+1; i++) {
          console.log(strippedInputArray[i])
          if (/[\u064B-\u0652]/.test(strippedInputArray[i])) {
            strippedInputArray.splice(i, 1);
          }
          
        }
        console.log(strippedInputArray)
        return strippedInputArray
      }}.then(() => {
      if (alephHamzahMaddah === true) {
      
        for (let i = 0; i < strippedInputArray.length+1; i++) {
          console.log(strippedInputArray[i])
          if (/[\u0622-\u0623]|[\u0625]/.test(strippedInputArray[i])) {
            strippedInputArray.splice(i, 1, "ا");
          }
      }
      console.log("input with normalized aleph:")
      console.log(strippedInputArray)
      return strippedInputArray
      };
      
      strippedInput = strippedInputArray.join("");
      console.log("stripped input is now " + strippedInput);
  

    })




    // a script to normalize alephs




  
    //if (arabicWithDiacritics === true && diacritics === false && taaMarbutah === true) - strip taa marbutah and save as strippedInput
    
    //Need to make sure all these tests above don't allow non-Arabic characters - - make a test that says that if anything is outside of the range of Arabic characters it is blocked
    
    // if (arabicUniBlock === false || arabicWithDiacritics === false) {
    //   var invalidInput = rawInput
    //   var strippedInput = ""
    //   var inputNoDiacritics = ""
    //   if (lengthRawInput > 0) {
    //     console.log(invalidInput + " is not valid input")
    //   }  
    // }
    

    
    // }
    





  this.setState({
    rawInput: rawInput,
    rawInputArray: rawInputArray,
    rawInputLength: rawInputLength,
    arabicUniBlock: arabicUniBlock,
    arabicWithDiacritics: arabicWithDiacritics,
    diacritics: diacritics,
    anyHamzah: anyHamzah,
    alephHamzahMaddah: alephHamzahMaddah,
    taaMarbutah: taaMarbutah,
    strippedInputArray: strippedInputArray,
    strippedInput: strippedInput,
  });

 console.log("results of handleInput")
 console.log(this.state)
}


setScore(scores) {

}






    render() {
      return (
        <div className="">
            <h4 className="input-label">Input:</h4>
            <input name="mainInput" type="text" placeholder="Enter Arabic Text Here" className="main-input" onChange={this.handleInput}/>
            <InputValidator inputObj={this.state}/>
           

        </div>
      );
    }
  }
  
  export default InputField;