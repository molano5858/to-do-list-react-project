import React from "react"
import { TodoIcon } from "./TodoIcon"
import './DeleteIcon.css'

function DeleteIcon({deleteTodo}){

    return(
        <TodoIcon  type={`delete`} onClick={deleteTodo}/>
    )
}

export {DeleteIcon}