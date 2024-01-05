import './TodoItem.css'

function TodoItem ({todoName,completed}){
    return (
        <li className='TodoItem'>
            <span>V</span>
            <p>{todoName}</p>
            <span>X</span>
            {console.log(todoName,completed)}
        </li>
    )
}

export {TodoItem}