import './App.css';
import React, {useState} from 'react';
import { AppUI } from './components/AppUI/AppUI';
import { useLocalStorage } from './components/useLocalStorage/useLocalStorage';

const defaultTodos=[
  {text:'felipe', completed:true},
  {text:'paola', completed:true},
  {text:'matias', completed:false},
  {text:'Terry', completed:true},
  {text:'Dante', completed:false},
]

localStorage.setItem('todos_v1',JSON.stringify(defaultTodos))


function App() {
  const [todos,setTodos]=useLocalStorage('todos_v1',[])
  const [searchValue,setSearchValue]=useState('')

  const completedTodos=todos.filter((todo)=>todo.completed===true).length;
  const totalTodos=todos.length

  const searchedTodos= todos.filter((todo)=>{
    const textToSearch=todo.text.toLocaleLowerCase();
    const todoText=searchValue.toLocaleLowerCase();
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

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchHandler={searchHandler}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;

