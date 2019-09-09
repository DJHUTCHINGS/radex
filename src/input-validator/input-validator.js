import React, { Component } from "react";


import InputCommentsBox from "../input-comments-box/input-comments-box";


class InputValidator extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
      }

 

    render() {
        //not sure how to pass validity down or what to do with it
        let validInput = false;
        console.log(this.props.rawInput)
        if (this.props.rawInput === "") {
            validInput = false;
        } else {
            validInput = true;
        }
        console.log(validInput)
      return (
        <div className="">
            <p>Is the input valid?</p>
            <p>{validInput}</p>
            <InputCommentsBox rawInput={this.props.rawInput}/>
        </div>
      );
    }
  }
  
  export default InputValidator;