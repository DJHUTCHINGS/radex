import React, { Component } from "react";
import './input-field.css';

import InputCommentsBox from "../input-comments-box/input-comments-box";


// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class InputField extends Component {
    constructor(){
        super()
        this.state = {
        //   PROPERTY:'',
        //   PROP2:'DEFAULT'
        }
      }

    // METHODNAME = event => {
    // event.preventDefault()

    // .then( response => console.log(response))
    // }
    


    render() {
      return (
        <div className="">
            <h3>Input:</h3>
            <input className="main-input"></input>
            <InputCommentsBox />

        </div>
      );
    }
  }
  
  export default InputField;