import React,{useState} from 'react';
import './App.css';
import { List } from './components/List';
import {UseStateCounter} from './components/UseStateCounter';
import {UseState2} from './components/UseState2';
import {StepTracker} from './components/StepTracker';

//jsx must have a single element as parent


function App() {

  const [toggle,setToggle] = useState(false);
  //Props is used to pass data from Parent child
  const listArr=[{name:'Tarzan',id:1,reviews:'Good'},{name:'Tees',id:2,reviews:'Poor'},{name:'RRR',id:3,reviews:'Awesome'}];
  function onToggle()
  {
      console.log('toggle is',toggle);
      setToggle(toggle=>!toggle);
  }
  return (
    <div className='app'>
        {toggle&&<ul>
          {listArr.map((item,index)=>{
            return <List k={index} itemName={item}/>
          })}
        </ul>}
        {!toggle&&<UseStateCounter/>}

        <button onClick={onToggle}>Toggle</button>
        {toggle&&<UseState2/>}
        <StepTracker/>
    </div>
  );
}


export default App;
