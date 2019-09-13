import React, { Component } from "react";
import './output-comments-box.css';

// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class OutputCommentsBox extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

      }

 

    render(props) {
      return (
        <div className="OutputCommentsBox">
            <h4 className="test">Comments on the results:</h4>
        </div>
      );
    }
  }
  
  export default OutputCommentsBox;