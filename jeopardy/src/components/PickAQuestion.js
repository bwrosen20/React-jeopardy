import React from "react"
import Question from "./Question"

function PickAQuestion({activateSteal,handleSubmitAnswer, questionArray}){

    

    var questionToAsk = questionArray[Math.floor(Math.random()*questionArray.length)]

    
      
      
      

    return <div>

              <Question activateSteal={activateSteal} handleSubmitAnswer={handleSubmitAnswer} question={questionToAsk} />  
            
    </div>

}

export default PickAQuestion