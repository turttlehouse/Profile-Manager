export const saveToLocalStorage = (key,value) =>{
    try {

        localStorage.setItem(key,JSON.stringify(value));
        
    } catch (error) {

        console.error('failed to save');
             
    }
}

export const loadFromLocalStorage = (key) =>{
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value): null;
        
    } catch (error) {

        console.error('failed to load');
        return null;    
        
    }
}