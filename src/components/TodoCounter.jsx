import './TodoCounter.css'

function TodoCounter ({completed,total}){
    return (
        <>
        {completed!==total? 
            <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> To Do´s</h1>
            :<h1 className='TodoCounter'><span>Felicitaciones</span> Completaste todas tus tareas</h1>
        }
        </>
    )
}

export {TodoCounter}