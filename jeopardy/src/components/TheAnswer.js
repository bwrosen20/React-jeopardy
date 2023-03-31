import React, {useEffect,useState} from "react"
import {useHistory} from "react-router-dom"

function TheAnswer({steal,correctAnswer,wereTheyRight}){

    const [timeRemaining,setTimeRemaining]=useState(2)
    const history=useHistory();
    

    console.log(steal)
   
    useEffect(()=>{
        
        if (timeRemaining===0 && steal===false){
          history.push("/Board")
        }
        if (timeRemaining===0 && steal){
          history.push("/Steal")
        }
        
        const timer=setTimeout(()=>{
      
            setTimeRemaining(prev=>(prev-1))
      
        },1000)
      
        return function (){
          clearTimeout(timer)
        }
      
      
      
      },[timeRemaining])

   
   return <div>

        {wereTheyRight?<h1>Correct!!</h1>:(steal?<h1>Incorrect- Other team can steal</h1>:<h1>Incorrect- The right answer was {correctAnswer}</h1>)}

    </div>
}

export default TheAnswer