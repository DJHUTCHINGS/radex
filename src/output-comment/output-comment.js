import React, { Component } from "react";
import './output-comment.css';

// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class OutputComment extends Component {
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

      // const { rawInput, strippedInput, ALword, mainTestOutputComments, meemWord, testsRan, verbalNoun, score } = this.props.finalResultsObject


      return (
        <div className="">
            <h5 className="test">one output comment is loaded</h5>
        </div>
      );
    }
  }
  
  export default OutputComment;