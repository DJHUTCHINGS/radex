import React, { Component } from "react";
import './output-comments-box.css';

// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class OutputCommentsBox extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

      };




    render(props) {


       
  // const { mainTestScore } = this.props.mainTestScore;
  // const { mainTestOutputComments } = mainTestOutputComments;

  const { mainTestOutputComments } = this.props;


  var commentsDisplay = []
  for (let i = 0; i < mainTestOutputComments.length; i++) {
   let comment = mainTestOutputComments[i]
   commentsDisplay.push(
     <li key={i}>
     <p>{comment}</p>
   </li> 
   )
  }


  var OutputDisplay = ""
  if (commentsDisplay !== "") {
    OutputDisplay = [
      <div>
      <p>Comments:</p>
      <ul>
        {commentsDisplay}
      </ul>
      </div>

    ]
  } else {
    OutputDisplay = ""
  }
console.log("commentsDisplay is")
console.log(commentsDisplay)

      return (
        <div className="OutputCommentsBox">
          {OutputDisplay}
        </div>
      );
    }
  }
  
  export default OutputCommentsBox;