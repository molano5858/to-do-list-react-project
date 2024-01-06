// import './App.css';
// import React, {useState} from 'react';
// import { CreateTodoButton } from './components/CreateTodoButton';
// import { TodoCounter } from './components/TodoCounter';
// import { TodoItem } from './components/TodoItem';
// import { TodoList } from './components/TodoList';
// import { TodoSearch } from './components/TodoSearch';

// const defaultTodos=[
//   {text:'Tarea 1', completed:true},
//   {text:'Tarea 2', completed:true},
//   {text:'Tarea 3', completed:false},
//   {text:'Tarea 4', completed:true},
//   {text:'Tarea 5', completed:false},
// ]

// function App() {
//   const [todos,setTodos]=useState(defaultTodos)
//   const [searchValue,setSearchValue]=useState('')

//   const completedTodos=defaultTodos.filter((todo)=>todo.completed===true).length;
//   const totalTodos=todos.length

//   const searchedTodos= todos.filter((todo)=>todo.text.includes(searchValue))
//   console.log(searchedTodos)

//   function searchHandler (event){
//     const text=event.target.value
//     setSearchValue(text)
//   }

//   return (
//     <div className="App">
//       <TodoCounter completed={completedTodos} total={totalTodos}/>
//       <TodoSearch 
//         searchValue={searchValue}
//         setSearchValue={setSearchValue}
//         searchHandler={searchHandler}
//       />
//       <TodoList>
//         {
//          todos.map((todo)=>{
//           return  < TodoItem key={todo.text} todoName={todo.text} completed={todo.completed}/>
//         }) 
//         }
//       </TodoList>
//       <CreateTodoButton />

//     </div>
//   );
// }

// export default App;



// --------------------------------------------------

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

  const searchedTodos= todos.filter((todo)=>todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  console.log(searchedTodos)

  function searchHandler (event){
    const text=event.target.value
    setSearchValue(text)
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
          return  < TodoItem key={todo.text} todoName={todo.text} completed={todo.completed}/>
        }) 
        }
      </TodoList>
      <CreateTodoButton />

    </div>
  );
}

export default App;

