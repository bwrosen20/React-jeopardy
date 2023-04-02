import React, {useEffect,useState} from "react"
import {useHistory} from "react-router-dom"

function TheAnswer({questionTracker, steal,correctAnswer,wereTheyRight}){

    const [timeRemaining,setTimeRemaining]=useState(2)
    const history=useHistory();
    
    const gameEnder=questionTracker.find((question)=>(
      question>1
    ))

    console.log(gameEnder)
   
    useEffect(()=>{


      if (timeRemaining===0){ 
        
        if (steal && gameEnder){
        history.push("/steal")
        }
        else if (gameEnder){
          history.push("/board")
        }

        else{
          history.push("/gameover")
        }}
       
        
        const timer=setTimeout(()=>{
      
            setTimeRemaining(prev=>(prev-1))
      
        },1000)
      
        return function (){
          clearTimeout(timer)
        }
      
      
      
      },[timeRemaining])

   
   return <div className={wereTheyRight?"rightanswer":"wronganswer"}>

        {wereTheyRight?<h1>Correct!!</h1>:(steal?<h1>Incorrect- Other team can steal</h1>:<h1>Incorrect- The right answer was {correctAnswer}</h1>)}

    </div>
}

export default TheAnswer