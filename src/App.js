import './App.css';
import React, {useState,useEffect} from 'react';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const defaultTodos=[
  {text:'felipe', completed:true},
  {text:'paola', completed:true},
  {text:'matias', completed:false},
  {text:'Terry', completed:true},
  {text:'Dante', completed:false},
]

function App() {
  const [todos,setTodos]=useState(defaultTodos)
  const [searchValue,setSearchValue]=useState('')

  const completedTodos=defaultTodos.filter((todo)=>todo.completed===true).length;
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
            completeTodo={()=>(completeTodo(todo.text))}/>
          }) 
        }
      </TodoList>
      <CreateTodoButton />

    </div>
  );
}

export default App;

