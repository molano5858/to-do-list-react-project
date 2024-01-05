function TodoList (props){
    return (
        <ul >
            <h2>hola bebe voy antes</h2>
            {props.children}
            <h2>hola bebe voy despues</h2>
        </ul>
    )
}

export {TodoList}