import React from "react"
import Question from "./Question"

function PickAQuestion({questionArray, onAnswered}){

    

    var questionToAsk = questionArray[Math.floor(Math.random()*questionArray.length)]

    
      
      
      

    return <div>

              <Question question={questionToAsk} onAnswered={onAnswered}/>  
            
    </div>

}

export default PickAQuestion