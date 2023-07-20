import React from "react"

function GameOver({endGame, team1Points,team2Points}){


    return <div className="rightanswer">
            <h1>{team1Points>team2Points? "Team 1 Wins!" : team1Points===team2Points ? "It's a tie!" : "Team 2 Wins!"}</h1>
            <h2>Final Score:{team1Points>team2Points ?  `${team1Points} to ${team2Points}` : `${team2Points} to ${team1Points}`}</h2>

            <button onClick={endGame}>Play Again</button>
    </div>
}

export default GameOver