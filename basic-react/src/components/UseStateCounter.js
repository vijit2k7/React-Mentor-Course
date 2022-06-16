import React,{useState} from 'react'


export const UseStateCounter = () => {

    const [counter,setCounter]=useState(0);
    const [counter2,setCounter2]=useState(0);
    console.log('App is rendered '+parseInt(counter+1)+' times');
  
    function increment()
    {
        
      setCounter(counter=>counter+1);
      setCounter2(counter2=>counter2+2);
      console.log('incremented',counter,counter2);
    }
  
    function decrement()
    {
      setCounter(counter=>counter-1);
      setCounter2(counter2=>counter2-2);
      console.log('decremented',counter,counter2);
    }
  
    function reset()
    {
      setCounter(counter=>0);
      setCounter2(counter2=>0);

      console.log('reset',counter,counter2);
    }
    console.log('counter is',counter);


    return (
        <>
        <h1>{counter}</h1>
        <h1>{counter2}</h1>
        <div className='button'>
          <button id='1' onClick={increment}>Increment</button>
          <button id='2' onClick={decrement}>Decrement</button>
          <button id='3' onClick={reset}>Reset</button>
        </div>
        </>
    )
}
