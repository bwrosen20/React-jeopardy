import React, {useState, useEffect} from "react"

function Question({question,handleSubmitAnswer}){


    const [timeRemaining,setTimeRemaining]=useState(7)
    const [inputValue,setInputValue]=useState("")

    useEffect(()=>{
        
        if (timeRemaining===0){
          handleSubmitAnswer("brian","rosen","rocks",question.id,false)
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
        handleSubmitAnswer(inputValue,question.value,question.correctAnswers,question.id,false)
      }
   

    return <div>

        <h1>{timeRemaining}</h1>
            
        <h1>{question.prompt}</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="type answer here" value={inputValue} onChange={onAnswered}></input>
            <button>Submit</button>

        </form>


                
                
            
    </div>

}

export default Question