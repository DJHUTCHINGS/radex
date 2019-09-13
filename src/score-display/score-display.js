import React, { Component } from "react";
import './score-display.css';

// import MainTests from "../tests/main-tests";


class ScoreDisplay extends Component {
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



      console.log(this.props)
      const { mainTestScore, mainTestOutputComments } = this.props;
      console.log(mainTestScore)
      console.log(mainTestOutputComments)




     var scoreDisplay = []

     for (let i = 0; i < mainTestScore.length; i++) {
      let char = mainTestScore[i][0]
      let scr = mainTestScore[i][1]
      scoreDisplay.push(
        <li key={i}>
        <span>{scr} - {char}</span>
      </li> 
      )

     } 


 

   






      // const { rawInput, strippedInput, ALword, mainTestOutputComments, meemWord, testsRan, verbalNoun, score } = this.props.finalResultsObject

      return (
        <div className="score-display">
            <h4>Score Display</h4>
            <p>NOTE: This is for testing purposes only</p>
            
            <ul className="score-display-score-box">

        {scoreDisplay}

            </ul>
            <ul className="score-display-comments-box">

            </ul>

        </div>
      );
    }
  }
  
  export default ScoreDisplay;