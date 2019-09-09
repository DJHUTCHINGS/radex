import React, { Component } from "react";
// import './input-tips.css';

// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class InputTips extends Component {
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
            <h5 className="input-tip">TIP: (there will be a tip here when valid) </h5>
        </div>
      );
    }
  }
  
  export default InputTips;