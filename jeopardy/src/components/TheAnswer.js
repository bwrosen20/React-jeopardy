import React, {useEffect,useState} from "react"
import {useHistory} from "react-router-dom"

function TheAnswer({questionTracker, steal,correctAnswer,wereTheyRight}){

    const [timeRemaining,setTimeRemaining]=useState(2)
    const history=useHistory();

    console.log(questionTracker)
    
    const gameEnder=questionTracker.find((question)=>(
      question>0
    ))

    console.log(gameEnder)
   
    useEffect(()=>{


      if (timeRemaining===0){ 
        
        if (steal){
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

        {wereTheyRight?<h2>Correct!!</h2>:(steal?<h2>Incorrect- Other team can steal</h2>:<h2>Incorrect- The right answer was {correctAnswer}</h2>)}

    </div>
}

export default TheAnswer