import React, {useEffect, useState} from "react"
import {Route,Switch, useHistory} from "react-router-dom"
import NavBar from "./NavBar"
import Board from "./Board"
import Rules from "./Rules"
import NewQuestionForm from "./NewQuestionForm"
import PickAQuestion from "./PickAQuestion"

function App(){

    const [questionList,setQuestionList]=useState([])
    const [currentArray,setCurrentArray]=useState([])
    const [team1Points,setTeam1Points]=useState(0)
    const [team2Points,setTeam2Points]=useState(0)

useEffect(()=>{
    fetch("http://localhost:3001/questions")
        .then((r)=>r.json())
        .then((data)=>setQuestionList(data))

    
},[])

function onAnswered(value){
    return value
}


const history=useHistory();

function handleClick(event){
    history.push("/question")
    console.log(event.target)
    setCurrentArray(questionList.filter((question)=>(
        question.className===event.target.id
    )))
}


return (
<div>
    <NavBar />
    
    <Switch>
        <Route exact path="/new-question">
            <NewQuestionForm />
        </Route>
        <Route exact path="/board">
            <Board handleClick={handleClick} team1Points={team1Points} team2Points={team2Points}/>
        </Route>
        <Route exact path="/question">
            <PickAQuestion questionArray={currentArray} onAnswered={onAnswered}/>
        </Route>
        <Route exact path="/">
            <Rules />
        </Route>
    </Switch>
   
</div>   
        )
}

export default App



