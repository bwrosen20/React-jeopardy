import React from "react"
import {NavLink} from "react-router-dom"



function NavBar(){

    return <div className="navbar">
        
        <NavLink
            to="/"
            exact
            
            activeStyle={{
                background:"lightblue",
            }}
            >
                Rules   
            </NavLink>
        <NavLink
            to="/board"
            exact
           
            activeStyle={{
                background:"lightblue",
            }}
            >
                Play Jeopardy!   
            </NavLink>
        <NavLink
            to="/new-question"
            exact
           
            activeStyle={{
                background:"lightblue",
            }}
            >
                Add a New Question!   
            </NavLink>
          
        
        
    </div>

}

export default NavBar