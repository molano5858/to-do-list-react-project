import './TodoItem.css'

function TodoItem ({todoName,completed,completeTodo, deleteTodo}){
    return (
        <li className='TodoItem'>
            <span onClick={completeTodo} className={`Icon Icon-check ${completed ? 'Icon-check--active':null }`}>V</span>
            <p className={`TodoItem-p ${completed?'TodoItem-p--complete':null}`}>{todoName}</p>
            <span className='Icon Icon-delete' onClick={deleteTodo}>X</span>
        </li>
    )
}

export {TodoItem}