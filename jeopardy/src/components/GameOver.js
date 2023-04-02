import React from "react"

function GameOver({endGame, team1Points,team2Points}){

    // endGame()

    return <div className="rightanswer">
            {team1Points>team2Points?<h1>Team 1 Wins!</h1>:<h1>Team 2 Wins!</h1>}
    </div>
}

export default GameOver