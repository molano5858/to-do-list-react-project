import React from "react"
import './CompleteIcon.css'
import { TodoIcon } from "./TodoIcon"

function CompleteIcon({type,completeTodo}){
    return(
        <TodoIcon type={type} onClick={completeTodo}/>
    )
}

export {CompleteIcon}