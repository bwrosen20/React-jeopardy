import React, {useEffect,useState} from "react"
import {useHistory} from "react-router-dom"

function TheAnswer({teamCounter,correctAnswer,wereTheyRight}){

    const [timeRemaining,setTimeRemaining]=useState(3)
    const history=useHistory();
   
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

   
   return <div>

        {wereTheyRight?<h1>Correct!!</h1>:<h1>Incorrect- The right answer was {correctAnswer}</h1>}

    </div>
}

export default TheAnswer