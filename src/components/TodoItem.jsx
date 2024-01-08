import './TodoItem.css'
import { DeleteIcon } from './DeleteIcon'
import { CompleteIcon } from './CompleteIcon'

function TodoItem ({todoName,completed,completeTodo, deleteTodo}){
    return (
        <li className='TodoItem'>
            <CompleteIcon type={completed?`checked`:'unchecked'} completeTodo={completeTodo} className={`Icon Icon-check Icon-check--active'`}/>
            {/* <CompleteIcon type={'checked'} completeTodo={completeTodo} className={`Icon Icon-check ${completed ? 'Icon-check--active':null }`}/> */}
            {/* <span onClick={completeTodo} className={`Icon Icon-check ${completed ? 'Icon-check--active':null }`}>v</span> */}
            <p className={`TodoItem-p ${completed?'TodoItem-p--complete':null}`}>{todoName}</p>
            <DeleteIcon deleteTodo={deleteTodo}/>
        </li>
    )
}

export {TodoItem }