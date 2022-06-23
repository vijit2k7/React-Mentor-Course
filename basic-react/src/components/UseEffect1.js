import React,{useState,useEffect} from 'react'

//i have to track mouse position on the screen and print it in the DOM dynamically
function useEffect1() {
    const [X,setX]=useState(0);
    const [Y,setY]=useState(0);
//Application any asynchronous tasks api,eventlisteners,timer


    useEffect(()=>{
        console.log('inside useEffect component mounted');
        function eventListener(e)
        {
            console.log('event listener',e.clientX,e.clientY);
                 setX(X=>e.clientX);
                 setY(Y=>e.clientY);
        }
        window.addEventListener('mousemove',eventListener);
        
        return ()=>{  //componentWillUnmount
           console.log('component unmounted') 
           window.removeEventListener('mousemove',eventListener);
        }

    },[])
    return (
        <>
        <h1>Use Effect Component</h1>
        <h1>X coordinate : {X} </h1>
        <h1>Y coordinate : {Y} </h1>
        </>
        )
}

export default useEffect1;


