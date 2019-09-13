import React, { Component } from "react";
import './input-comments-box.css';

import InputComment from "../input-comment/input-comment";
// import OTHERCOMPONENTS from "../FOLDER/JSFILE";



class InputCommentsBox extends Component {
    constructor(props){
        super(props)
        this.state = {
        //   PROPERTY:'',
        //   PROP2:'DEFAULT'
        }
      }

    // METHODNAME = event => {
    // event.preventDefault()

    // .then( response => console.log(response))
    // }
    


    render(props) {
      // console.log({this.props})
     
      // if (this.props !== undefined) {
      //   console.log("the data received from props is:")
      //   var strippedInputArray = props.strippedInputArray
      //   console.log(strippedInputArray);
      // }
      const { inputObj } = this.props;
      // console.log("inputObj is:" )
      // console.log(inputObj)
      const {     
        rawInput,
        rawInputArray,
        rawInputLength,
        arabicUniBlock,
        arabicWithDiacritics,
        diacritics,
        validInput,
        arabicOnly,
        arabicOnlyArray,
        taaMarbutah,
        anyHamzah,
        alephHamzahMaddah,
        strippedInput,
        strippedInputArray,
        score, 
          } = inputObj;
  
  console.log("testng the inputs comment box")
  console.log(strippedInput)
  console.log(taaMarbutah)
  //DISPLAY
  var rawInputDisplay = []
  if (rawInput !== "") {
    rawInputDisplay = [
      <div>
  <h4>Notes about the input:</h4>
  <p>This original input is: {rawInput}.</p>
      </div>

    ]
  } 
  
  var assessedInputDisplay = []
  if (strippedInput !== undefined && strippedInput !== "") {
    assessedInputDisplay = [
      <p>This input to be assessed is: {strippedInput}.</p>
    ]
  } else if (strippedInput === "") {
    assessedInputDisplay = [
      <p>This input appears to not be valid Arabic characters.</p>
    ]
  }

  var inputComments = []
  if (strippedInput !== undefined && strippedInput !== "") {
    if (taaMarbutah === true) {
      inputComments.push("The input contains a Taa Marbutah, which is never part of the root so it has been removed.")
    }
    if (alephHamzahMaddah === true) {
      inputComments.push("The input contains an aliph that had a hamzah or a maddah on it. Because written Arabic is inconsistent on the rendering of these marks, they have been removed from this analysis. In general a hamzah at the start of the a word is not part of the root, but if it is in the middle of the word, it might be.")
    }
  }

  var inputCommentsDiplay = []
  if (inputComments !== undefined) {
    for (let i = 0; i < inputComments.length; i++) {
      inputCommentsDiplay.push(
        <li>{inputComments[i]}</li>
      )
    }
  }


      return (
        <div className="">
            {rawInputDisplay}
            {assessedInputDisplay}
            <ul>
              {inputCommentsDiplay}
            </ul>
            
            {/* <InputComment testComment={'this is the term that will be assessed + ${inputObj.strippedInputArray}'}/> */}
        </div>
      );
    }
  }
  
  export default InputCommentsBox;


  // class Listing extends Component {  
  //   render() {    
  //     const {      
  //       listing: {        
  //         title,        
  //         type,        
  //         location: {          
  //           city,          
  //           state,          
  //           country        }      }    } = this.props;





