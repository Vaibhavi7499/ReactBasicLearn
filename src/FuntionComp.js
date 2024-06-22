import React,{useState} from "react";

function Demo(){
    let [count,setCount]=useState(0)
   let Increment=()=>{
setCount(
    count+1
)
    }
return(
    <div>
        <h1>Count is : {count}</h1>
        <button onClick={Increment}>increase</button>
    </div>
)
}
export default Demo