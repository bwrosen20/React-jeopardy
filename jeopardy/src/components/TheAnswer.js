import React, {useEffect,useState} from "react"
import {useHistory} from "react-router-dom"

function TheAnswer(){

    const [timeRemaining,setTimeRemaining]=useState(5)
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

        
      <h1>We're in the answer thing. See ya soon</h1>

    </div>
}

export default TheAnswer