import './App.css';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const defaultTodos=[
  {text:'Tarea 1', completed:true},
  {text:'Tarea 2', completed:true},
  {text:'Tarea 3', completed:false},
  {text:'Tarea 4', completed:true},
]

const completedTodos=defaultTodos.filter((todo)=>todo.completed===true).length

function App() {
  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={defaultTodos.length}/>
      <TodoSearch/>
      <TodoList>
        {
         defaultTodos.map((todo)=>{
          return  < TodoItem key={todo.text} todoName={todo.text} completed={todo.completed}/>
        }) 
        }
      </TodoList>
      <CreateTodoButton />

    </div>
  );
}

export default App;
