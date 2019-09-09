import React, { Component } from "react";


import InputCommentsBox from "../input-comments-box/input-comments-box";



class MainTests extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
      }

 
    render() {
        console.log("At Main Tests now")
        console.log(this.props.rawInput)
      return (
        <div className="">
            <h5>main test input received is: {this.props.rawInput}. This will not be seen in final</h5>
        

        </div>
      );
    }
  }
  
  export default MainTests;