import React, {useEffect, useState} from "react"
import {Route,Switch, useHistory} from "react-router-dom"
import NavBar from "./NavBar"
import Board from "./Board"
import Rules from "./Rules"
import NewQuestionForm from "./NewQuestionForm"
import PickAQuestion from "./PickAQuestion"
import TheAnswer from "./TheAnswer"
import Steal from "./Steal"
import GameOver from "./GameOver"

function App(){

    const [questionList,setQuestionList]=useState([])
    const [currentArray,setCurrentArray]=useState([])
    const [team1Points,setTeam1Points]=useState(0)
    const [team2Points,setTeam2Points]=useState(0)
    const [teamCounter,setTeamCounter]=useState(true)
    const [correctAnswer,setCorrectAnswer]=useState("")
    const [wereTheyRight,setWereTheyRight]=useState(false)
    const [steal,activateSteal]=useState(false)
    const [stealQuestion,setStealQuestion]=useState([])
    const history=useHistory()
    const [questionTracker,setQuestionTracker]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])


useEffect(()=>{
    fetch("http://localhost:3001/questions")
        .then((r)=>r.json())
        .then((data)=>setQuestionList(data))

    
},[])



function handleSubmitAnswer(value,points,correctArray,id,stealValue){
    
    
    if ((correctArray).includes((value).toLowerCase())){
        if (teamCounter && stealValue){
            setTeam2Points(()=>team2Points+points)
        }
        else if (teamCounter || stealValue){
            setTeam1Points(()=>team1Points+points)
        }
        else{
            setTeam2Points(()=>team2Points+points)
        }
        setWereTheyRight(true)
        setTeamCounter(!teamCounter)
        activateSteal(false)
    }
    else{

       if (stealValue){
        setWereTheyRight(false)
        activateSteal(false)
        setTeamCounter(!teamCounter)
       }
       
       
       else {
        setStealQuestion(questionList.find((question)=>(
            question.id===id
        )))
        setWereTheyRight(false)
        activateSteal(true)
        if (stealValue){
            setTeamCounter(!teamCounter)
        }
            }

        }

    
    setCorrectAnswer(correctArray[0])
    history.push("/theanswer")
    
    }
    


function handleClick(event){

    const number=parseInt(event.target.value)

   setQuestionTracker(questionTracker.map((question)=>(
    question===number?0:question
   )))

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
        <Route exact path="/gameover">
            <GameOver />
        </Route>
        <Route exact path="/steal">
            <Steal steal={steal} question={stealQuestion} handleSubmitAnswer={handleSubmitAnswer}/>
        </Route>
        <Route exact path="/theanswer">
            <TheAnswer questionTracker={questionTracker} steal={steal} wereTheyRight={wereTheyRight} correctAnswer={correctAnswer} teamCounter={teamCounter}/>
        </Route>
        <Route exact path="/board">
            <Board questionTracker={questionTracker} teamCounter={teamCounter} handleClick={handleClick} team1Points={team1Points} team2Points={team2Points}/>
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



