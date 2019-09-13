import React, { Component } from "react";


 
import OutputCharsBox from "../output-chars-box/output-chars-box";
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import ScoreDisplay from "../score-display/score-display";

class MainTests extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
        this.runMainTests = this.runMainTests.bind(this);
      }

      runMainTests(strippedInput, score) {
      console.log("now starting main tests...")
      let mainTestResults = {
        score: score,
        meemWord: false,
        ALword: false,
        verbalNoun: false,
        testsRan: [],
        mainTestOutputComments: []
      }
      let inputLength = mainTestResults.score.length
      //add extra spaces to word for tests:
      
      if (inputLength > 0) {
        var pos1 = mainTestResults.score[0][0]
        var pos1scr = mainTestResults.score[0][1]
        if (inputLength > 1) {
          var pos2 = score[1][0]
          var pos2scr = mainTestResults.score[1][1]
          if (inputLength > 2) {
            var pos3 = score[2][0]
            var pos3scr = mainTestResults.score[2][1]
            if (inputLength > 3) {
              var pos4 = score[3][0]
              var pos4scr = mainTestResults.score[3][1]
              //!!!!!!!!!!!!! NEED TO FINISH
            }
          }
        }
      }
      console.log(pos1, pos1scr, pos2, pos2scr, pos3, pos3scr, pos4, pos4scr)
      const diff = 100/inputLength;
      
      mainTestResults.testsRan.push("initial م");
      if (inputLength > 3 && pos1 === "م") {mainTestResults.score[0][1] = mainTestResults.score[0][1] / diff;
      mainTestResults.mainTestOutputComments.push("If there is an initial meem, it is probably not part of the root.");
      }

      mainTestResults.testsRan.push("initial ا");
      if (inputLength > 4 && pos1 === "ا") {mainTestResults.score[0][1] = mainTestResults.score[0][1] / diff;
      mainTestResults.mainTestOutputComments.push("Aliphs are usually not part of the root");
      }

      mainTestResults.testsRan.push("initial الـ");
      if (inputLength > 4 && pos1 === "ا" && pos2 === "ل") {
        mainTestResults.score[0][1] = mainTestResults.score[0][1] / diff;
        mainTestResults.score[1][1] = mainTestResults.score[1][1] / diff;
        mainTestResults.mainTestOutputComments.push("ال are usually not part of the root");
        mainTestResults.ALword = true;
      }

      mainTestResults.testsRan.push("final ـها");
      if (inputLength > 5 && score[inputLength-1][0] === "ا" && score[inputLength-2][0] === "ه" ) {
        mainTestResults.score[inputLength-1][1] = mainTestResults.score[inputLength-2][1] / diff;
        mainTestResults.score[inputLength-2][1] = mainTestResults.score[inputLength-2][1] / diff;
        mainTestResults.mainTestOutputComments.push("ِA ها at the end of the word is usually a pronoun");
      }

      return mainTestResults
      }



    render(props) {
        console.log("At Main Tests now")
        //the following needs to be updated
        // console.log(this.props.rawInput)
        const { newInputObj } = this.props;
        const {score, rawInput, strippedInput} = newInputObj
        console.log(score)

var mainTestResults = this.runMainTests(strippedInput, score);
console.log("the main test results handed back are:")
console.log(mainTestResults)



      return (
        <div className="">
            <h5>main test input received is: //need to get from inputObj. This will not be seen in final</h5>
            <OutputCharsBox />
            {/* <OutputCommentsBox /> */}
            {/* <ScoreDisplay inputObj={this.props.inputObj}/> */}
        </div>
      );
    }
  }
  
  export default MainTests;