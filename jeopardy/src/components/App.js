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
    const [teamCounter,setTeamCounter]=useState(true)
    const history=useHistory();

useEffect(()=>{
    fetch("http://localhost:3001/questions")
        .then((r)=>r.json())
        .then((data)=>setQuestionList(data))

    
},[])

function handleSubmitAnswer(value,points,correctArray){
    if ((correctArray).includes((value).toLowerCase())){
        if (teamCounter){
            setTeam1Points(()=>team1Points+points)
        }
        else{
            setTeam2Points(()=>team2Points+points)
        }
    }

    setTeamCounter(!teamCounter)
    history.push("/board")
    
    }
    


function handleClick(event){
    
    console.log(event.target)
    setCurrentArray(questionList.filter((question)=>(
        question.className===event.target.id
    )))
    history.push("/question")
}


return (
<div>
    <NavBar />
    
    <Switch>
        <Route exact path="/new-question">
            <NewQuestionForm />
        </Route>
        <Route exact path="/board">
            <Board teamCounter={teamCounter} handleClick={handleClick} team1Points={team1Points} team2Points={team2Points}/>
        </Route>
        <Route exact path="/question">
            <PickAQuestion handleSubmitAnswer={handleSubmitAnswer} questionArray={currentArray}/>
        </Route>
        <Route exact path="/">
            <Rules />
        </Route>
    </Switch>
   
</div>   
        )
}

export default App



