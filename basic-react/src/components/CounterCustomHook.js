import React from 'react'
import useCounter from './custom-hooks/useCounter';

export const CounterCustomHook = () => {

    const {increment,counter}=useCounter(0,5);
    

    return (
        <>
        <h1>{counter}</h1>
        <div className='button'>
          <button id='1' onClick={increment}>Increment</button>
          {/* <button id='2' onClick={decrement}>Decrement</button> */}
          {/* <button id='3' onClick={reset}>Reset</button> */}
        </div>
        </>
    )
}


