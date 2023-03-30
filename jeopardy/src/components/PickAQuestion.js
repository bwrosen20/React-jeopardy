import React from "react"
import Question from "./Question"

function PickAQuestion({inputValue, questionArray, onAnswered}){

    

    var questionToAsk = questionArray[Math.floor(Math.random()*questionArray.length)]

    
      
      
      

    return <div>

              <Question inputValue={inputValue} question={questionToAsk} onAnswered={onAnswered}/>  
            
    </div>

}

export default PickAQuestion