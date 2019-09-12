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

      return (
        <div className="">
            <h5 className="test"> input comment box is loaded</h5>
            <p>This input is </p>
            {/* <InputComment testComment={"this is a test input comment that was generated in the comments box and passed down to a comment"}/> */}
        </div>
      );
    }
  }
  
  export default InputCommentsBox;