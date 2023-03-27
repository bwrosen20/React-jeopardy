import React, {useEffect, useState} from "react"
import {Route,Switch} from "react-router-dom"
import NavBar from "./NavBar"
import Board from "./Board"
import Rules from "./Rules"
import NewQuestionForm from "./NewQuestionForm"

function App(){

    const [questionList,setQuestionList]=useState([])

useEffect(()=>{
    fetch("http://localhost:3001/questions")
        .then((r)=>r.json())
        .then((data)=>setQuestionList(data))
},[])


console.log(questionList)

return (
<div>
    <NavBar />
    
    <Switch>
        <Route exact path="/new-question">
            <NewQuestionForm />
        </Route>
        <Route exact path="/board">
            <Board questionList={questionList}/>
        </Route>
        <Route exact path="/">
            <Rules />
        </Route>
    </Switch>
   
</div>   
        )
}

export default App



// {
        //     "id":26,
        //     "category":"tv",
        //     "value":800,
        //     "prompt":"In Ted Lasso, what number does Jaime Tartt wear?",
        //     "correctAnswers":["9","nine"]
            
        // }