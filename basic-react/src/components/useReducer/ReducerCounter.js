import React,{useReducer,useState} from 'react'

const initialState=0;
function reducer(state,action){   
  state+=action.val;

  if(action.type==='reset')
    return 0;
  return state;
}

function ReducerCounter() {
 
  const [count,dispatch] = useReducer(reducer,initialState);
  const [input,setInput]=useState(0)
  function handleInput(e){
    console.log(e.target.value);
    setInput(e.target.value);
  }
  return (
      <>
          <h2>ReducerCounter</h2>
          <h2>Counter is: {count}</h2>
          <input type='number' onInput={handleInput} placeholder='Enter a number' />
          <button onClick={()=>dispatch({type:'increment',val:parseInt(input)})}>Increment</button>
          <button onClick={()=>dispatch({type:'decrement',val:-parseInt(input)})}>Decrement</button>
          <button onClick={()=>dispatch({type:'reset',val:0})}>Reset</button>
      </>
  )
}

export default ReducerCounter






  