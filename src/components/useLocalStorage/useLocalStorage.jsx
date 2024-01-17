import {useState} from "react";

function useLocalStorage(nameInLocalStorage, initialValueToLocalStorage){// este es un custom hook que va a controlar todo lo que tenga que ver con localStorage
    const localStorageTodos= localStorage.getItem(nameInLocalStorage)
    let parsedTodos;
  
    if(!localStorageTodos){
      localStorage.setItem(nameInLocalStorage, JSON.stringify(initialValueToLocalStorage));
      parsedTodos=initialValueToLocalStorage
    }else{
      parsedTodos= JSON.parse(localStorageTodos)
    }
    const [item,setItem]=useState(parsedTodos)
    
    function saveTodosInStateAndLocalStorage(todos){
      localStorage.setItem(nameInLocalStorage,JSON.stringify(todos))
      setItem(todos)
    }
  
    return [item,saveTodosInStateAndLocalStorage]
  
}

export {useLocalStorage}
  