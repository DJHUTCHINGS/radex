import React, { Component } from "react";

import OutputCharsBox from "../output-chars-box/output-chars-box";
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import ScoreDisplay from "../score-display/score-display";
import MainTests from "./main-tests"

class BasicTests extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
        this.basicTest = this.basicTest.bind(this);
        this.initialScore = this.initialScore.bind(this);
      }

basicTest(strippedInputArray) {
  console.log("now we are running hte basic test")
  var score = this.initialScore(strippedInputArray)
  if (score.length > 0) {
    console.log("now we run first tests")
    for (let i = 0; i < strippedInputArray.length; i++) {
      console.log("now testing the index " + i + ", which is " + strippedInputArray[i])
      if (score[i][0] === "ص") {score[i][1] = score[i][1] * 2; score[i][2] = ["ص comment"]}
      if (score[i][0] === "ق") {score[i][1] = score[i][1] * 2; score[i][2] = ["ق comment"]}
      if (score[i][0] === "ا") {score[i][1] = score[i][1] / 2; score[i][2] = ["ا comment"]}
      if (score[i][0] === "ج") {score[i][1] = score[i][1] * 2; score[i][2] = ["ج comment"]}
      if (score[i][0] === "ض") {score[i][1] = score[i][1] * 2; score[i][2] = ["ض comment"]}
      if (score[i][0] === "م") {score[i][1] = score[i][1] / 2; score[i][2] = ["م comment"]}
      if (score[i][0] === "ع") {score[i][1] = score[i][1] * 2; score[i][2] = ["ع comment"]}
      if (score[i][0] === "ح") {score[i][1] = score[i][1] * 2; score[i][2] = ["ح comment"]}

    }



  } else {
    console.log("there is nothing to score")
  }

console.log("the final score array is:")
console.log(score)
return score
  //end of basic text
}



initialScore(strippedInputArray) {
console.log("creating intitial score out of the following array")
console.log(strippedInputArray)
let score = []

if (strippedInputArray !== undefined) {
  console.log("stripped input array does exist")
  //initial score is set as a percentage based on how many letters there are
  var defaultScore = 100 / strippedInputArray.length
  if (strippedInputArray.length > 0) {
    console.log("stripped input length is " + strippedInputArray.length)
    for (let i = 0; i < strippedInputArray.length; i++) {
      let thisCharacter = strippedInputArray[i]
      let emptyCommentArray = []
      let letterScoreArray = [thisCharacter, defaultScore, emptyCommentArray]
      score.push(letterScoreArray)
    }

  } else {
    console.log("stripped input is zero")
  }

} else {
  console.log("there is no valid input to assess")
}

console.log("The initial score array is:")
console.log(score)
return score;
}








    render(props) {
        console.log("At Basic Tests now")

        const { inputObj } = this.props;
        // console.log("inputObj is:" )
        // console.log(inputObj)
        const {     
          rawInput,
          rawInputArray,
          rawInputLength,
          arabicUniBlock,
          arabicWithDiacritics,
          diacritics,
          validInput,
          arabicOnly,
          arabicOnlyArray,
          taaMarbutah,
          anyHamzah,
          alephHamzahMaddah,
          strippedInput,
          strippedInputArray,
          score, 
            } = inputObj;
  
        var basicTestScore = this.basicTest(strippedInputArray)
        console.log("the results are of the basic test are:")
        console.log(basicTestScore)

        if (strippedInputArray !== undefined) {
          // console.log("arabicOnlyArray is")
          // console.log(strippedInputArray)
          // console.log(strippedInputArray[0])
        }
  
        if (rawInput !== undefined) {
          // console.log("rawInput is")
          // console.log(rawInput)
        }
  
        if (arabicOnlyArray !== undefined) {
          // console.log("arabicOnlyArray is")
          // console.log(arabicOnlyArray)
        }
        
        var newInputObj = {
          rawInput: rawInput,
          strippedInputArray: strippedInputArray,
          score: basicTestScore,
        }

        console.log("the new input object is as follows:")
        console.log(newInputObj)





      return (
        <div className="">
            <h5>at basic tests and awaiting modification </h5>
            <MainTests newInputObj={newInputObj}/>
            {/* <OutputCharsBox /> */}
            {/* <OutputCommentsBox score={score}/> */}
            {/* <ScoreDisplay inputObj={this.props.inputObj}/> */}
        </div>
      );
    }
  }
  
  export default BasicTests;