import React from "react"
import { BsCheck, BsCheckCircleFill  , } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import './TodoIcon.css'

const iconTypes={
    'checked':<BsCheckCircleFill /> ,
    'unchecked':<BsCheck />,
    'delete':<AiFillCloseCircle />,
}


function TodoIcon({type,onClick}){
    return (
        <span onClick={onClick} className={`Icon Icon-svg Icon-${type}`}>
            {iconTypes[type]}
        </span>
    )
}

export {TodoIcon}