import React, { Component } from "react";
import './output-comments-box.css';

class OutputCommentsBox extends Component {
    constructor(props){
        super(props)
      };

    render(props) {

  const { mainTestOutputComments } = this.props;
  
  var commentsDisplay = []
  // console.log(commentsDisplay)
  for (let i = 0; i < mainTestOutputComments.length; i++) {
   let comment = mainTestOutputComments[i]
   commentsDisplay.push(
     <li key={i}>
     <p>{comment}</p>
   </li> 
   )
  }

  var OutputDisplay = ""
  if (commentsDisplay.length > 0) { 
    OutputDisplay = [
      <div>
       <p>Comments:</p>
      <ul>
        {commentsDisplay}
      </ul>
      </div>
    ]
  } else if (commentsDisplay === []) {
    OutputDisplay = ""
  }
// console.log("commentsDisplay is")
// console.log(commentsDisplay)

      return (
        <div className="OutputCommentsBox">
        
          {OutputDisplay}
        </div>
      );
    }
  }
  
  export default OutputCommentsBox;



