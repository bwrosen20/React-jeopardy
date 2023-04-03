import React from "react"

function GameOver({endGame, team1Points,team2Points}){


    return <div className="rightanswer">
            {team1Points>team2Points?<h1>Team 1 Wins!</h1>:<h1>Team 2 Wins!</h1>}
            <h2>Final Score:</h2>{(team1Points>team2Points)?<h2>{team1Points} to {team2Points}</h2>:<h2>{team2Points} to {team1Points}</h2>}

            <button onClick={endGame}>Play Again</button>
    </div>
}

export default GameOver