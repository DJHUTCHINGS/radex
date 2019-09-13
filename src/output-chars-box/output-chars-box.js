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

    // METHODNAME = event => {
    // event.preventDefault()

    // .then( response => console.log(response))
    // }
    


    render(props) {
      // let mainTestOutputComments = []
      // let mainTestScore = []
      if (this.props !== undefined) {


      }
      // console.log(this.props)
      // const { } = this.props;
      const { mainTestScore, mainTestOutputComments } = this.props;
      console.log(mainTestScore)
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
 
 
  


      // console.log(mainTestScore)
      // const { rawInput, strippedInput, ALword, mainTestOutputComments, meemWord, testsRan, verbalNoun, score } = finalResultsObject
     
      // if (this.props.finalResultsObject.score !== undefined) {
      //   const score = finalResultsObject.score
      // }


      return (
        <div className="">
           
            <p>Output:</p>
            {scoreDisplay}
            <OutputCommentsBox mainTestOutputComments={mainTestOutputComments}/>
            <ScoreDisplay mainTestScore={mainTestScore} mainTestOutputComments={mainTestOutputComments}/>
        </div>
      );
    }
  }
  
  export default OutputCharsBox;