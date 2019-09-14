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

  console.log("commentsDisplay is ")
  
  var commentsDisplay = []
  console.log(commentsDisplay)
  for (let i = 0; i < mainTestOutputComments.length; i++) {
   let comment = mainTestOutputComments[i]
   commentsDisplay.push(
     <li key={i}>
     <p>{comment}</p>
   </li> 
   )
  }

  console.log(commentsDisplay)
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
console.log("commentsDisplay is")
console.log(commentsDisplay)




// var assessedInputDisplay = []
// if (strippedInput !== undefined && strippedInput !== "") {
//   assessedInputDisplay = [
//     <p>This input to be assessed is: {strippedInput}.</p>
//   ]
// } else if (strippedInput === "") {
//   assessedInputDisplay = [
//     <p>This input appears to not be valid Arabic characters.</p>
//   ]
// }




      return (
        <div className="OutputCommentsBox">
        
          {OutputDisplay}
        </div>
      );
    }
  }
  
  export default OutputCommentsBox;



