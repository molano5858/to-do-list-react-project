import './CreateTodoButton.css'

function handlerClick(){
    console.log('Create To Do')
}

function CreateTodoButton (){
    return (
        <button className='CreateTodoButton' onClick={handlerClick}>+</button>
    )
}

export {CreateTodoButton}