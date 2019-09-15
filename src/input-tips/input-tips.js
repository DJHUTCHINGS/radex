import React, { Component } from "react";
// import './input-tips.css';

class InputTips extends Component {
    constructor(){
        super()
        this.state = {
        }
      }
    render() {
      return (
        <div className="">
            <h5 className="input-tip">TIP: 1 word only; all spaces ignored. </h5>

        </div>
      );
    }
  }
  
  export default InputTips;