import './TodoSearch.css'
import React,{useState} from 'react'

function TodoSearch ({searchValue,searchHandler}){
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