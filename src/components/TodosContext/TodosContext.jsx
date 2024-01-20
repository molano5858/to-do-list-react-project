import React, { createContext, useState } from "react";
import { useLocalStorage } from '../useLocalStorage/useLocalStorage'

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const {item:todos,saveTodosInStateAndLocalStorage:setTodos, loading,error}=useLocalStorage('todos_v1',[{text:"felipe","completed":true}])
    
    
    const [searchValue,setSearchValue]=useState('')
  
    const completedTodos=todos.filter((todo)=>todo.completed===true).length;
    const totalTodos=todos.length
    console.log(todos)
    const searchedTodos= todos.filter((todo)=>{
      const textToSearch=todo.text.toLowerCase();
      const todoText=searchValue.toLowerCase();
      return (textToSearch.includes(todoText))
      }
    )
  
    function searchHandler (event){
      const text=event.target.value
      setSearchValue(text)
    }
  
    function completeTodo(todoName){
      const newTodos=[...todos]
      const todoNameIndex= newTodos.findIndex((todo)=>todo.text===todoName)
      newTodos[todoNameIndex].completed=!newTodos[todoNameIndex].completed
      setTodos(newTodos)
    } 
  
    // deleteTodo using filter
    // function deleteTodo(todoName){
    //   const newTodos=[...todos]
    //   const todoToDeleteIndex=newTodos.findIndex((todo)=>todo.text===todoName)
    //   const filteredTodos=newTodos.filter((element,index)=>index!==todoToDeleteIndex)
    //   setTodos(filteredTodos)
    // } 
  
    function deleteTodo(todoName){
        const newTodos=[...todos]
        const todoToDeleteIndex=newTodos.findIndex((todo)=>todo.text===todoName)
        newTodos.splice(todoToDeleteIndex,1)
        setTodos(newTodos)
      } 
    const value = {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchHandler,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }
    return (
        <TodoContext.Provider value={{ value }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoContextProvider }

