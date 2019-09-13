import React, { Component } from "react";
import './output-chars-box.css';
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import ScoreDisplay from "../score-display/score-display";
// import OTHERCOMPONENTS from "../FOLDER/JSFILE";


class OutputCharsBox extends Component {
    constructor(props){
        super(props)
        this.state = {
        //   PROPERTY:'',
        //   PROP2:'DEFAULT'
        }
      }



    render(props) {
      // let mainTestOutputComments = []
      // let mainTestScore = []
      if (this.props !== undefined) {


      }
      // console.log(this.props)
      // const { } = this.props;
      const { mainTestScore, mainTestOutputComments } = this.props;
      console.log("start output chars box")
      console.log(mainTestScore)
      console.log(mainTestOutputComments)
      //push cahracter  comments to main comments
      for (let i = 0; i < mainTestScore.length; i++) {
        let thisComment = mainTestScore[i][2]
        mainTestOutputComments.push(thisComment)
      }
      console.log(mainTestOutputComments)


      var scoreDisplay = []
      var fontSizeBase = 0;
      for (let i = 0; i < mainTestScore.length; i++) {
     
        fontSizeBase = fontSizeBase + mainTestScore[i][1]
      }
      console.log("fontSizeBase is " + fontSizeBase)


      //create score spans
      for (let i = 0; i < mainTestScore.length; i++) {
       let char = mainTestScore[i][0]
       let scr = mainTestScore[i][1]
       let newsize = scr / fontSizeBase * 100 + 15
       let size = newsize.toString(); 
       const divStyle = {
         fontSize: `${size}px`,
         color: "blue"
        }
      // console.log(divStyle)
       scoreDisplay.push(
          
          <span style={divStyle}>{char} </span>
     
         
       )
 
      } 
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