import React, {useState,useEffect} from "react"

function Steal({handleSubmitAnswer,question,teamCounter}){

    const [timeRemaining,setTimeRemaining]=useState(10)
    const [inputValue,setInputValue]=useState("")

    useEffect(()=>{
        
        if (timeRemaining===0){
          handleSubmitAnswer("brian","rosen",question.correctAnswers,question.id,true)
        }
        
        const timer=setTimeout(()=>{
      
            setTimeRemaining(prev=>(prev-1))
      
        },1000)
      
        return function (){
          clearTimeout(timer)
        }
      
      
      
      },[timeRemaining])

    
      function onAnswered(event){
        setInputValue(event.target.value)
      }

      function handleSubmit(event){
        event.preventDefault()
        handleSubmitAnswer(inputValue,question.value,question.correctAnswers,question.id,true)
      }
   

    return <div>
        <h2 className="steal">{teamCounter?"Team 2 Can ":"Team 1 Can "}Steal!</h2>
        <div className={((timeRemaining>5)?"greencircle":((timeRemaining>3)?"yellowcircle":"redcircle"))}>
        <span className="timer">{timeRemaining}</span>
        </div>
       
          <div className="questionscreen">
        <h2 className="prompt">{question.prompt}</h2>
        <form onSubmit={handleSubmit}>
            <input autoFocus placeholder="type answer here" value={inputValue} onChange={onAnswered}></input>
            <button> Submit</button>

        </form>
        </div>  

                
                
            
    </div>

}

export default Steal