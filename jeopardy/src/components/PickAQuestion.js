import React from "react"
import Question from "./Question"

function PickAQuestion({handleSubmitAnswer, questionArray}){

    

    var questionToAsk = questionArray[Math.floor(Math.random()*questionArray.length)]

    
      
      
      

    return <div>

              <Question handleSubmitAnswer={handleSubmitAnswer} question={questionToAsk} />  
            
    </div>

}

export default PickAQuestion