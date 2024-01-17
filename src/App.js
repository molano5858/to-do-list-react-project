import './App.css';
import React, {useState,useEffect} from 'react';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';

const defaultTodos=[
  {text:'felipe', completed:true},
  {text:'paola', completed:true},
  {text:'matias', completed:false},
  {text:'Terry', completed:true},
  {text:'Dante', completed:false},
]

localStorage.setItem('todos_v1',JSON.stringify(defaultTodos))

function useLocalStorage(nameInLocalStorage, initialValueToLocalStorage){// este es un custom hook que va a controlar todo lo que tenga que ver con localStorage
  const localStorageTodos= localStorage.getItem(nameInLocalStorage)
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem(nameInLocalStorage, JSON.stringify(initialValueToLocalStorage));
    parsedTodos=initialValueToLocalStorage
  }else{
    parsedTodos= JSON.parse(localStorageTodos)
  }
  const [item,setItem]=useState(parsedTodos)
  
  function saveTodosInStateAndLocalStorage(todos){
    localStorage.setItem(nameInLocalStorage,JSON.stringify(todos))
    setItem(todos)
  }

  return [item,saveTodosInStateAndLocalStorage]

}

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
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchHandler={searchHandler}
      />
      <TodoList>
        {
         searchedTodos.map((todo)=>{
          return  < TodoItem 
            key={todo.text} 
            todoName={todo.text} 
            completed={todo.completed} 
            completeTodo={()=>(completeTodo(todo.text))}
            deleteTodo={()=>(deleteTodo(todo.text))}
            />
          }) 
        }
      </TodoList>
      <CreateTodoButton />

    </div>
  );
}

export default App;

