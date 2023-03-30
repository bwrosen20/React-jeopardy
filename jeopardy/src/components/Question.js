import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

function Question({inputValue, question, onAnswered}){

    const history=useHistory();
    const [timeRemaining,setTimeRemaining]=useState(15)

    useEffect(()=>{
        
        if (timeRemaining===0){
          history.push("/board")
        }
        
        const timer=setTimeout(()=>{
      
            setTimeRemaining(prev=>(prev-1))
      
        },1000)
      
        return function (){
          clearTimeout(timer)
        }
      
      
      
      },[timeRemaining])

      function handleSubmitAnswer(event){
          event.preventDefault()
      }
   

    return <div>

        <h1>{timeRemaining}</h1>
            
        <h1>{question.prompt}</h1>
        <form onSubmit={handleSubmitAnswer}>
            <input placeholder="type answer here" value={inputValue} onChange={onAnswered}></input>
            <button>Submit</button>

        </form>


                
                
            
    </div>

}

export default Question