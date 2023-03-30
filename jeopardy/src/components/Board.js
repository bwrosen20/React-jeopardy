import React from "react"

function Board({handleClick, team1Points,team2Points}){

   





    return (<div>
    <div className="categories">
        <button className="category">Movies</button>
        <button className="category">TV</button>
        <button className="category">Geography</button>
        <button className="category">Sports</button>
        <button className="category">Books</button>

    </div>
        <div className="qcontainer">

    
            
           <button className="question" id="movies200" onClick={handleClick}>$200</button>
           <button className="question" id="tv200" onClick={handleClick}>$200</button>
           <button className="question" id="geography200" onClick={handleClick}>$200</button>
           <button className="question" id="sports200" onClick={handleClick}>$200</button>
           <button className="question" id="books200" onClick={handleClick}>$200</button>
           <button className="question" id="movies400" onClick={handleClick}>$400</button>
           <button className="question" id="tv400" onClick={handleClick}>$400</button>
           <button className="question" id="geography400" onClick={handleClick}>$400</button>
           <button className="question" id="sports400" onClick={handleClick}>$400</button>
           <button className="question" id="books400" onClick={handleClick}>$400</button>
           <button className="question" id="movies600" onClick={handleClick}>$600</button>
           <button className="question" id="tv600" onClick={handleClick}>$600</button>
           <button className="question" id="geography600" onClick={handleClick}>$600</button>
           <button className="question" id="sports600" onClick={handleClick}>$600</button>
           <button className="question" id="books600" onClick={handleClick}>$600</button>
           <button className="question" id="movies800" onClick={handleClick}>$800</button>
           <button className="question" id="tv800" onClick={handleClick}>$800</button>
           <button className="question" id="geography800" onClick={handleClick}>$800</button>
           <button className="question" id="sports800" onClick={handleClick}>$800</button>
           <button className="question" id="books800" onClick={handleClick}>$800</button>
           <button className="question" id="movies1000" onClick={handleClick}>$1000</button>
           <button className="question" id="tv1000" onClick={handleClick}>$1000</button>
           <button className="question" id="geography1000" onClick={handleClick}>$1000</button>
           <button className="question" id="sports1000" onClick={handleClick}>$1000</button>
           <button className="question" id="books1000" onClick={handleClick}>$1000</button>



        <h1>Team 1's Points: {team1Points}</h1>

        <h1>Team 2's Points: {team2Points}</h1>

        </div>

    </div>)

}

export default Board