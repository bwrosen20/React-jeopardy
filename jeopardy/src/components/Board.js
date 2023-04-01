import React from "react"
import Scoreboard from "./Scoreboard"

function Board({teamCounter, handleClick, team1Points,team2Points, questionTracker}){

    return (<div>

        <div className="turncounter">
            {teamCounter?<h1>Team 1's Turn</h1>:<h1>Team 2's Turn</h1>}
        </div>


    <div className="categories">
        <button className="category">Movies</button>
        <button className="category">TV</button>
        <button className="category">Geography/Science</button>
        <button className="category">Sports</button>
        <button className="category">Books</button>

    </div>
        <div className="qcontainer">

            
           <button className={questionTracker[0]?"question":"greyquestion"} id="movies200" value="1" onClick={questionTracker[0]?handleClick:null}>$200</button>
           <button className={questionTracker[1]?"question":"greyquestion"} id="tv200" value="2" onClick={questionTracker[1]?handleClick:null}>$200</button>
           <button className={questionTracker[2]?"question":"greyquestion"} id="geography200" value="3" onClick={questionTracker[2]?handleClick:null}>$200</button>
           <button className={questionTracker[3]?"question":"greyquestion"} id="sports200" value="4" onClick={questionTracker[3]?handleClick:null}>$200</button>
           <button className={questionTracker[4]?"question":"greyquestion"} id="books200" value="5" onClick={questionTracker[4]?handleClick:null}>$200</button>
           <button className={questionTracker[5]?"question":"greyquestion"} id="movies400" value="6" onClick={questionTracker[5]?handleClick:null}>$400</button>
           <button className={questionTracker[6]?"question":"greyquestion"} id="tv400" value="7" onClick={questionTracker[6]?handleClick:null}>$400</button>
           <button className={questionTracker[7]?"question":"greyquestion"} id="geography400" value="8" onClick={questionTracker[7]?handleClick:null}>$400</button>
           <button className={questionTracker[8]?"question":"greyquestion"} id="sports400" value="9" onClick={questionTracker[8]?handleClick:null}>$400</button>
           <button className={questionTracker[9]?"question":"greyquestion"} id="books400" value="10" onClick={questionTracker[9]?handleClick:null}>$400</button>
           <button className={questionTracker[10]?"question":"greyquestion"} id="movies600" value="11" onClick={questionTracker[10]?handleClick:null}>$600</button>
           <button className={questionTracker[11]?"question":"greyquestion"} id="tv600" value="12" onClick={questionTracker[11]?handleClick:null}>$600</button>
           <button className={questionTracker[12]?"question":"greyquestion"} id="geography600" value="13" onClick={questionTracker[12]?handleClick:null}>$600</button>
           <button className={questionTracker[13]?"question":"greyquestion"} id="sports600" value="14" onClick={questionTracker[13]?handleClick:null}>$600</button>
           <button className={questionTracker[14]?"question":"greyquestion"} id="books600" value="15" onClick={questionTracker[14]?handleClick:null}>$600</button>
           <button className={questionTracker[15]?"question":"greyquestion"} id="movies800" value="16" onClick={questionTracker[15]?handleClick:null}>$800</button>
           <button className={questionTracker[16]?"question":"greyquestion"} id="tv800" value="17" onClick={questionTracker[16]?handleClick:null}>$800</button>
           <button className={questionTracker[17]?"question":"greyquestion"} id="geography800" value="18" onClick={questionTracker[17]?handleClick:null}>$800</button>
           <button className={questionTracker[18]?"question":"greyquestion"} id="sports800" value="19" onClick={questionTracker[18]?handleClick:null}>$800</button>
           <button className={questionTracker[19]?"question":"greyquestion"} id="books800" value="20" onClick={questionTracker[19]?handleClick:null}>$800</button>
           <button className={questionTracker[20]?"question":"greyquestion"} id="movies1000" value="21" onClick={questionTracker[20]?handleClick:null}>$1000</button>
           <button className={questionTracker[21]?"question":"greyquestion"} id="tv1000" value="22" onClick={questionTracker[21]?handleClick:null}>$1000</button>
           <button className={questionTracker[22]?"question":"greyquestion"} id="geography1000" value="23" onClick={questionTracker[22]?handleClick:null}>$1000</button>
           <button className={questionTracker[23]?"question":"greyquestion"} id="sports1000" value="24" onClick={questionTracker[23]?handleClick:null}>$1000</button>
           <button className={questionTracker[24]?"question":"greyquestion"} id="books1000" value="25" onClick={questionTracker[24]?handleClick:null}>$1000</button>



        <Scoreboard team1Points={team1Points} team2Points={team2Points} />

        </div>

    </div>)

}

export default Board