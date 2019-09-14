import React, { Component } from "react";


 
import OutputCharsBox from "../output-chars-box/output-chars-box";
import OutputCommentsBox from "../output-comments-box/output-comments-box";
import ScoreDisplay from "../score-display/score-display";
import { tsLiteralType } from "@babel/types";
import { ReadStream } from "tty";
import { CodeGenerator } from "@babel/generator";

class MainTests extends Component {
    // probably not needed here
    constructor(props){
        super(props)
        this.state = {

        }
        this.runMainTests = this.runMainTests.bind(this);
      }

      runMainTests(strippedInput, score) {
      // console.log("now starting main tests...")
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
      

      // 	===	[length - 5]	 &&		===	[length - 4]	 &&		===	[length - 3]	 &&	thirdFrmEnd	===	[length - 2]	 &&	

      if (inputLength !== undefined && inputLength > 0) {

        var pos1 = mainTestResults.score[0][0]
        var pos1scr = mainTestResults.score[0][1]
        if (inputLength > 1) {
          var pos2 = score[1][0]
          var pos2scr = mainTestResults.score[1][1]
          var lastPos = score[inputLength - 1][0]
          var lastPosScr = mainTestResults.score[inputLength - 1][1]
          if (inputLength > 2) {
            var pos3 = score[2][0]
            var pos3scr = mainTestResults.score[2][1]
            var secFrmEnd = score[inputLength - 2][0]
            var secFrmEndScr = mainTestResults.score[inputLength - 2][1]
            if (inputLength > 3) {
              var pos4 = score[3][0]
              var pos4scr = mainTestResults.score[3][1]
              var thirdFrmEnd = score[inputLength - 3][0]
              var thirdFrmEndScr = mainTestResults.score[inputLength - 3][1]
              if (inputLength > 4) {
                var pos5 = score[4][0]
                var pos5scr = mainTestResults.score[4][1]
                var fourthFrmEnd = score[inputLength - 4][0]
                var fourthFrmEndScr = mainTestResults.score[inputLength - 4][1]
                if (inputLength > 5) {
                  var pos6 = score[5][0]
                  var pos6scr = mainTestResults.score[5][1]
                  var fifthFrmEnd = score[inputLength - 5][0]
                  var fifthFrmEndScr = mainTestResults.score[inputLength - 5][1]
                  if (inputLength > 6) {
                    var pos7 = score[6][0]
                    var pos7scr = mainTestResults.score[6][1]
                    var sixthFrmEnd = score[inputLength - 6][0]
                    var sixthFrmEndScr = mainTestResults.score[inputLength - 6][1]
                    if (inputLength > 7) {
                      var pos8 = score[7][0]
                      var pos8scr = mainTestResults.score[7][1]
                    }}}  }  
            }
          }
        }
      }
      // console.log(pos1, pos1scr, pos2, pos2scr, pos3, pos3scr, pos4, pos4scr)
      const diff = 100/inputLength;
      //START TESTS START TESTS START TESTS START TESTS START TESTS START TESTS START TESTS 
      //DO NOT ERASE THIS COMMENT DO NOT ERASE THIS COMMENT DO NOT ERASE THIS COMMENT DO NOT ERASE THIS COMMENT 
      

      // mainTestResults.testsRan.push("initial م");
      // if (inputLength > 3 && pos1 === "م") {mainTestResults.score[0][1] = mainTestResults.score[0][1] / diff;
      // mainTestResults.mainTestOutputComments.push("If there is an initial meem, it is probably not part of the root.");
      // }

      // mainTestResults.testsRan.push("initial ا");
      // if (inputLength > 4 && pos1 === "ا") {mainTestResults.score[0][1] = mainTestResults.score[0][1] / diff;
      // mainTestResults.mainTestOutputComments.push("Aliphs are usually not part of the root");
      // }

      // mainTestResults.testsRan.push("initial الـ");
      // if (inputLength > 4 && pos1 === "ا" && pos2 === "ل") {
      //   mainTestResults.score[0][1] = mainTestResults.score[0][1] / diff;
      //   mainTestResults.score[1][1] = mainTestResults.score[1][1] / diff;
      //   mainTestResults.mainTestOutputComments.push("ال are usually not part of the root");
      //   mainTestResults.ALword = true;
      // }

      // mainTestResults.testsRan.push("final ـها");
      // if (inputLength > 5 && score[inputLength-1][0] === "ا" && score[inputLength-2][0] === "ه" ) {
      //   mainTestResults.score[inputLength-1][1] = mainTestResults.score[inputLength-2][1] / diff;
      //   mainTestResults.score[inputLength-2][1] = mainTestResults.score[inputLength-2][1] / diff;
      //   mainTestResults.mainTestOutputComments.push("ِA ها at the end of the word is usually a pronoun");
      // }



//TESTNOTE: 
mainTestResults.testsRan.push(
  "M123"
  ); 
  if (
      inputLength > 3 
      && 
      pos1 === "م"
      ) {
      mainTestResults.score[0][1] = pos1scr / diff;
      mainTestResults.mainTestOutputComments.push(
          "If there is an initial meem, it is probably not part of the root."
          );
}

//TESTNOTE: 
mainTestResults.testsRan.push(
  "A123"
  ); 
if (
  inputLength > 4 
  && pos1 === "ا"
  ) {
      mainTestResults.score[0][1] = pos1scr / diff;
      mainTestResults.mainTestOutputComments.push(
          "Aliphs are usually not part of the root"
          );
  };

//TESTNOTE: 
mainTestResults.testsRan.push(
  "AL123"
  );
if (
  inputLength > 4 
  && 
  pos1 === "ا" 
  && 
  pos2 === "ل"
  ) {
  mainTestResults.score[0][1] = pos1scr / diff;
  mainTestResults.score[1][1] = pos2scr / diff;
  mainTestResults.mainTestOutputComments.push(
      "ال are usually not part of the root"
      );
  mainTestResults.ALword = true;
}

//TESTNOTE: 
mainTestResults.testsRan.push(
  "123HA"
  );
if (
  inputLength > 5 
  && 
  lastPos === "ا" 
  && 
  secFrmEnd === "ه"
  ) {
  mainTestResults.score[inputLength-1][1] = lastPosScr / diff;
  mainTestResults.score[inputLength-2][1] = secFrmEndScr / diff;
  mainTestResults.mainTestOutputComments.push(
      "ِA ها at the end of the word is usually a pronoun"
      );
}



console.log("start tests conversion on this test array:")
function testFromInitials(score) {
  var testsArray = [
      ["M123", "M123 comment"],
      ["122", "122 comment"],
      ["MST123", "MST123 comment"],
      ["T1T23", "T1T23 comment"]
      ]
  console.log(testsArray)
  var conversionKey = [
      ["X", "X"],
      ["M", "م"],
      ["A", "ا"],
      ["S", "س"],
      ["T", "ت"],
      ["W", "و"],
      ["H", "ه"],
      ["?", "ه"],
      ["I", "ي"],
      ["L", "ل"],
      ["B", "ب"],
      ["F", "ف"],
      ["N", "ن"],
      ["Y", "Y"],
      ["Z", "Z"],
      ["K", "ك"],
      ["1", "a"], 
      ["2", "b"],
      ["3", "c"],
      ["4", "d"],

  ]

  //this is going to be the new array of tests
  var convertedTestsArray = []
  //this cycles though every model
  for (let i = 0; i < testsArray.length; i++) {
      //this selects on of the test models
      let thisTest = testsArray[i][0]
      console.log("converting this test:")
      console.log(thisTest)
      //this splits the model into an array
      let thisTestArray = thisTest.split("")
      // console.log("this test array is:")
      // console.log(thisTestArray)
      //this cycles through every letter in the model
      var newTestWordArray = []
      for (let j = 0; j < thisTestArray.length; j++) {
        //this assigns the letter to a variable
        let thisCharacter = thisTestArray[j][0]
        // console.log("the letter being looked at is:")
        // console.log(thisCharacter)
        for (let k = 0; k < conversionKey.length; k++) {
          if (thisCharacter === conversionKey[k][0]) {
            // console.log(thisCharacter + " matches " + conversionKey[k][1])
            var switchLetter = conversionKey[k][1]
            // console.log("the new letter is:")
            // console.log(switchLetter)
            newTestWordArray.push(switchLetter)
          }
          // console.log("the new test word array is now:")
          // console.log(newTestWordArray)
        }
        // var rejoinedTest = newTestWordArray.join("")
        // console.log("the rejoined test is:")
        // console.log(rejoinedTest)

      }
      // testsArray[i][0] = rejoinedTest[i]
      convertedTestsArray.push(newTestWordArray)
      // console.log("the convertedTestsArray is:")
      // console.log(convertedTestsArray)
      testsArray[i][0] = convertedTestsArray[i]
  }
  console.log("the tests array is now:")
  console.log(testsArray)
//End of model conversion 


console.log("score is:")
console.log(score)
var numberOfTests = testsArray.length
console.log("the number of tests to run is " + numberOfTests)



for (let i = 0; i < numberOfTests; i++) {
 let thisTest = testsArray[i][0]
 console.log("the test runnin now is:")
console.log(thisTest)
 let thisTestComment = testsArray[i][1]
 console.log(thisTestComment)
 let thisTestLength = thisTest.length
 console.log("the length of this test is " + thisTestLength)




}




//end function    
}

testFromInitials(score)



      // END TESTS END TESTS END TESTS END TESTS END TESTS END TESTS END TESTS END TESTS
      // DO NOT ERASE THIS COMMENT  DO NOT ERASE THIS COMMENT  DO NOT ERASE THIS COMMENT  DO NOT ERASE THIS COMMENT
      return mainTestResults
      }



    render(props) {
        // console.log("At Main Tests now")
        //the following needs to be updated
        // console.log(this.props.rawInput)
        const { newInputObj } = this.props;
        const {score, rawInput, strippedInput} = newInputObj;
        console.log(score)

var mainTestResults = this.runMainTests(strippedInput, score);
// console.log("the main test results handed back are:")
// console.log(mainTestResults)


      const { ALword, mainTestOutputComments, meemWord, testsRan, verbalNoun } = mainTestResults
      var mainTestScore = mainTestResults.score
  

//this may not be necessary
var finalResultsObject = {
  rawInput: rawInput, 
  strippedInput: strippedInput,
  ALword: ALword,
  mainTestOutputComments: mainTestOutputComments, 
  meemWord: meemWord,
  testsRan: testsRan, 
  verbalNoun: verbalNoun,
  score: mainTestScore,
}
console.log(finalResultsObject)




      return (
        <div className="">
            {/* <h5>main test input received is: //need to get from inputObj. This will not be seen in final</h5> */}
       
            <OutputCharsBox mainTestScore={mainTestScore} mainTestOutputComments={mainTestOutputComments}/>
          
            {/* <ScoreDisplay finalResultsObject={finalResultsObject}/> */}
        </div>
    );
    }
  }
  
  export default MainTests;