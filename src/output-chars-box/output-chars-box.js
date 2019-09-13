import React, { Component } from "react";
// import './output-chars-box.css';

// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class OutputCharsBox extends Component {
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

      const { finalResultsObject } = this.props

      console.log(finalResultsObject)
      // const { rawInput, strippedInput, ALword, mainTestOutputComments, meemWord, testsRan, verbalNoun, score } = finalResultsObject
     
      // if (this.props.finalResultsObject.score !== undefined) {
      //   const score = finalResultsObject.score
      // }


      return (
        <div className="">
            <h5 className="test">output chars box is loaded</h5>
        </div>
      );
    }
  }
  
  export default OutputCharsBox;