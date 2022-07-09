import {useState} from 'react'

function useCounter(initialValue=0,val=1) {
    console.log('useCounter called');
    const [counter,setCounter]=useState(initialValue);

    const increment=()=>{
        setCounter(counter+val);
    }
    const decrement=()=>{
        setCounter(counter-val);
    }
    const reset=()=>{
        setCounter(initialValue);
    }

    return {increment,decrement,reset,counter};
}

export default useCounter