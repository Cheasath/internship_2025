import { useState } from "react";

const useLocalStorage = (key,value) =>{
    var[text,setText] = useState(()=>{
    const jsonValue = localStorage.getItem(key);
    if (jsonValue) return jsonValue;
    return value;
});
     
    return [text,setText]
}
export default useLocalStorage;