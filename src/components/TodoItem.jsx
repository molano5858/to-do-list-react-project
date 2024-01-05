import './TodoItem.css'

function TodoItem ({todoName,completed}){
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${completed ? 'Icon-check--active':null }`}>V</span>
            <p className={`TodoItem-p ${completed?'TodoItem-p--complete':null}`}>{todoName}</p>
            <span className='Icon Icon-delete'>X</span>
            {console.log(todoName,completed)}
        </li>
    )
}

export {TodoItem}