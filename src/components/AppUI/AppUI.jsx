import React,{ useContext } from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError'
import {EmptyTodos} from '../EmptyTodos/EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodosContext/TodosContext';


function AppUI(){
    
    const {
        loading,
        error,    
        searchedTodos,
        completeTodo,
        deleteTodo, 
    }=useContext(TodoContext)
    return (
        <div className="App">
            <TodoCounter />
            <TodoSearch/>

            <TodoList>
                {loading ? <><TodosLoading /></>:null }
                {error? <TodosError/>:null }
                {!loading && searchedTodos.length===0? <EmptyTodos/>: null}
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
    )
}
export {AppUI}
