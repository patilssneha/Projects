import {useEffect, useState} from "react"

function Hook(){
    const [count,setcount] =useState(0);

    useEffect(() =>{
        console.log("component changed or count changed")

    },[count])
    return(
        <>
        <h1>count : {count}</h1>
        <button onClick={() => setcount(count+1)}>Increase</button>
        </>
    )
}
export default Hook;