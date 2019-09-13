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

  var rawInputDisplay = []
  if (rawInput !== undefined && rawInputDisplay !== null) {
  rawInputDisplay.push(
    <p>This original input is {rawInput}</p>
  )
}
      



      return (
        <div className="">
            {rawInputDisplay}
            <p>This input to be assessed is {strippedInput}</p>
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





