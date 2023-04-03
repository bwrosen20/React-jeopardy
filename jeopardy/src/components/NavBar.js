import React from "react"
import {NavLink} from "react-router-dom"



function NavBar(){

    return <div className="navbar">
        
        <NavLink
            to="/"
            exact
            
            activeStyle={{
                color:"black",
            }}
            className="navOption"
            >
                Rules   
            </NavLink>
        <NavLink
            to="/board"
            exact
           
            activeStyle={{
                color:"black",
            }}
            className="navOption"
            >
                Play Jeopardy!   
            </NavLink>
        <NavLink
            to="/new-question"
            exact
           
            activeStyle={{
                color:"black",
            }}
            className="navOption"
            >
                Add a New Question!   
            </NavLink>
          
        
        
    </div>

}

export default NavBar