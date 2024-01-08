import './TodoItem.css'

function TodoItem ({todoName,completed,completeTodo}){
    

    function deleteTodoHandler(){
        console.log('tarea ELIMINADA')
    }

    return (
        <li className='TodoItem'>
            <span onClick={completeTodo} className={`Icon Icon-check ${completed ? 'Icon-check--active':null }`}>V</span>
            <p className={`TodoItem-p ${completed?'TodoItem-p--complete':null}`}>{todoName}</p>
            <span className='Icon Icon-delete' onClick={deleteTodoHandler}>X</span>
        </li>
    )
}

export {TodoItem}