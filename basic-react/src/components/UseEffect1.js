import React,{useState,useEffect} from 'react'

//i have to track mouse position on the screen and print it in the DOM dynamically
function useEffect1() {
    const [X,setX]=useState(0);
    const [Y,setY]=useState(0);
//Application any asynchronous tasks api,eventlisteners,timer

    useEffect(()=>{
        console.log('inside useEffect');
        window.addEventListener('mousemove',(e)=>{
               setX(X=>e.clientX);
               setY(Y=>e.clientY);
        });
    },[]) //componentDidMount 
    //empty--->useEffect will run only once
    //mousemove1 //mousemove2 //mousemove3 //movemove4
    return (
        <>
        <h1>Use Effect Component</h1>
        <h1>X coordinate : {X} </h1>
        <h1>Y coordinate : {Y} </h1>
        </>
        )
}

export default useEffect1;


