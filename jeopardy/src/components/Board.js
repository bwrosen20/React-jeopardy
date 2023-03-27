import React from "react"
import Question from "./Question"

function Board({questionList}){

    return (<div>
    <div className="categories">
        <button className="category">Movies</button>
        <button className="category">TV</button>
        <button className="category">Music</button>
        <button className="category">Sports</button>
        <button className="category">Books</button>

    </div>
        <div className="qcontainer">
            {questionList.map((question)=>(
                <button className="question" key={question.id} onClick={
                    <Question question={question}/>
                }>${question.value}</button>
            ))}

        </div>

    </div>)

}

export default Board