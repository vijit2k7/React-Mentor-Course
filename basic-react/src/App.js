import React,{useState} from 'react';
import './App.css';
import { List } from './components/List';

//jsx must have a single element as parent

let counter3=0;

function App() {

  //Props is used to pass data from Parent child
  const listArr=[{name:'Tarzan',id:1,reviews:'Good'},{name:'Tees',id:2,reviews:'Poor'},{name:'RRR',id:3,reviews:'Awesome'}];
  let [counter,setCounter]=useState(0);
  let [counter2,setCounter2]=useState(0);
  console.log('App is rendered '+parseInt(counter+1)+' times');

  function increment()
  {
    // setCounter(counter=>counter+1);
    // setCounter2(counter2=>counter2+2);
    counter3+=3;
    console.log('incremented',counter,counter2,counter3);
  }

  function decrement()
  {
    setCounter(counter=>counter-1);
    setCounter2(counter2=>counter2-2);
    counter3-=3;
    console.log('decremented',counter,counter2);
  }

  function reset()
  {
    setCounter(counter=>0);
    setCounter2(counter2=>0);
    counter3=0;
    console.log('reset',counter,counter2);
  }
  console.log('counter is',counter);
  return (
    <div className='app'>
      <ul>
          {listArr.map((item,index)=>{
            return <List k={index} itemName={item}/>
          })}
        </ul>
        <h1>{counter}</h1>
        <h1>{counter2}</h1>
        <h1>{counter3}</h1>
        <div className='button'>
          <button id='1' onClick={increment}>Increment</button>
          <button id='2' onClick={decrement}>Decrement</button>
          <button id='3' onClick={reset}>Reset</button>
        </div>

    </div>
  );
}


export default App;
