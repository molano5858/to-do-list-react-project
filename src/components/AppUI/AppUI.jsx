import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';


function AppUI({
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchHandler,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }){
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
    )
}
export {AppUI}

