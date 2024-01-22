import React, {useContext} from 'react'
import { TodoContext } from '../TodosContext/TodosContext'
import './TodoSearch.css'

function TodoSearch (){
    const {searchValue,searchHandler}=useContext(TodoContext)
    return (
        <input 
        placeholder="Busca tu To Do aqui"  
        className='TodoSearch' 
        value={searchValue}
        onChange={searchHandler} 
         />
    )
}

export {TodoSearch}