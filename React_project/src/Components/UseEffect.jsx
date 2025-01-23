import { useState,useEffect } from "react"
const UseEffect=()=>{
    var [text,setText]= useState("")
    return(
        <div>
            <h1>This is use effect example</h1>
            <input type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>This is {text}</h4>
        </div>
    )
}

export default UseEffect