import React, { Component } from "react";
// import './input-comment.css';

// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class InputComment extends Component {
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
        <div className="input-comment">
            <h5 className="test">one input comment is loaded</h5>
            <p>{this.props.testComment}</p>
        </div>
      );
    }
  }
  
  export default InputComment;