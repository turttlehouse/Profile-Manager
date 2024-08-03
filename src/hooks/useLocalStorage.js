import { useEffect, useState } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage"

const useLocalStorage = (key,initialvalue) =>{
    
    const [storedValue,setStoredValue] = useState(()=>{return loadFromLocalStorage(key) || initialvalue;})

    useEffect(()=>{
        saveToLocalStorage(key,storedValue)
    },[key,storedValue]);


    return [storedValue,setStoredValue];
}

export default useLocalStorage;