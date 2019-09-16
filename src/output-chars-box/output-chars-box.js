import React, { Component } from "react";
import './output-chars-box.css';
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import ScoreDisplay from "../score-display/score-display";

class OutputCharsBox extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }
    render(props) {
      if (this.props !== undefined) {
        //this is probably no longer necessary
      }
      const { mainTestScore, mainTestOutputComments } = this.props;
      //push character comments from the basic tests to main comments
      for (let i = 0; i < mainTestScore.length; i++) {
        let thisComment = mainTestScore[i][2]
        mainTestOutputComments.push(thisComment)
      }
      //this modifies the scores in preparation for converting them to font sizes
      //it may not actually do much right now
      var scoreDisplay = []
      var fontSizeBase = 0;
      for (let i = 0; i < mainTestScore.length; i++) {
        fontSizeBase = fontSizeBase + mainTestScore[i][1]
      }
      //Sets up the individual characters and their font size 
      for (let i = 0; i < mainTestScore.length; i++) {
       let char = mainTestScore[i][0]
       let scr = mainTestScore[i][1]
       let newsize = scr / fontSizeBase * 100 + 15
       let size = newsize.toString(); 
       const divStyle = {
         fontSize: `${size}px`,
         color: "blue"
        }
        //this pushes the JSX that will display the characters to an array
       scoreDisplay.push(  
          <span style={divStyle}>{char} </span>
       )
      } 
        //this contains any text that we want to appear only if their are characters displayed
      var outputDisplay = []
      if (mainTestScore.length > 0) {
        outputDisplay = [
          <div>
          <p>Output:</p>
          </div>
        ] 
      }
      return (
        <div className="">
            {outputDisplay}
            {scoreDisplay}
            <OutputCommentsBox mainTestOutputComments={mainTestOutputComments}/>
            <ScoreDisplay mainTestScore={mainTestScore} mainTestOutputComments={mainTestOutputComments}/>
        </div>
      );
    }
  }
  
  export default OutputCharsBox;