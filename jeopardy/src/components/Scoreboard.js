import React from "react"

function Scoreboard({team1Points,team2Points}){

    return <div className="scoreboard">
        <span className="score">Team 1: {team1Points}</span>
        <span className="score">Team 2: {team2Points}</span>
    </div>

}

export default Scoreboard