import React,{useEffect, useState,useRef} from 'react'

function BasicRef() {
    const rerenderCount=useRef(0)
    const [count,setCount]=useState(0);
    rerenderCount.current+=1;

  return (
    <>
    <h2>BasicRef Renders: {rerenderCount.current}</h2>
     <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default BasicRef