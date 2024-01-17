import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';


function AppUI({
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

            {loading ? <p>Estamos Cargando</p>:null }
            {error? <p>Error</p>:null }
            {!loading && searchedTodos.length===0? <p>Crea tu Primer To Do</p>: null}
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

