import {useState, useEffect} from "react";

function useLocalStorage(nameInLocalStorage, initialValueToLocalStorage){// este es un custom hook que va a controlar todo lo que tenga que ver con localStorage
    const [item,setItem]=useState(initialValueToLocalStorage)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            try {
                const localStorageTodos= localStorage.getItem(nameInLocalStorage)
                let parsedTodos;
                if(!localStorageTodos){
                    localStorage.setItem(nameInLocalStorage, JSON.stringify(initialValueToLocalStorage));
                    parsedTodos=initialValueToLocalStorage
                }else{
                    parsedTodos= JSON.parse(localStorageTodos)
                    setItem(parsedTodos)
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
    
        },2000)
    },[])
    
    function saveTodosInStateAndLocalStorage(todos){
      localStorage.setItem(nameInLocalStorage,JSON.stringify(todos))
      setItem(todos)
    }
    return ({item,saveTodosInStateAndLocalStorage,loading,error})
}

export {useLocalStorage}
  