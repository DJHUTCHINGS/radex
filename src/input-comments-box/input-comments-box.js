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
    


    render() {
      return (
        <div className="">
            <h5 className="test"> input comment box is loaded</h5>
            <p>This input is //need to get from inputObj</p>
            <InputComment testComment={"this is a test input comment that was generated in the comments box and passed down to a comment"}/>
        </div>
      );
    }
  }
  
  export default InputCommentsBox;