import './App.css';
import React from 'react';
import { AppUI } from './components/AppUI/AppUI';
import { TodoContextProvider } from './components/TodosContext/TodosContext';
// import { useLocalStorage } from './components/useLocalStorage/useLocalStorage';

const defaultTodos=[
  {text:'felipe', completed:true},
  {text:'paola', completed:true},
  {text:'matias', completed:false},
  {text:'Terry', completed:true},
  {text:'Dante', completed:false},
]

localStorage.setItem('todos_v1',JSON.stringify(defaultTodos))


function App() {
  
  return (
    <TodoContextProvider>
      <AppUI />
    </TodoContextProvider>
  );
}

export default App;