import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { List } from './components/List';
import {UseStateCounter} from './components/UseStateCounter';
import {UseState2} from './components/UseState2';
import {StepTracker} from './components/StepTracker';
import LifeCycle from './components/LifeCycle';
import UseEffect1 from './components/UseEffect1';
import UseEffect2 from './components/UseEffect2';
import UseEffect3 from './components/UseEffect3';
import { BookParent } from './components/useContext/BookParent';
import Composition from './components/Composition';
import Theme from './components/ThemeUseContext/Theme';
import { ThemeProvider } from './components/ThemeUseContext/context/ThemeContext';
import ContactForm from './components/forms/ContactForm';
import ControlledInput from './components/forms/ControlledInput';
import ReactHookForm from './components/forms/ReactHookForm';
import ReducerCounter from './components/useReducer/ReducerCounter';
import PostuseState from './components/useReducer/PostuseState';
import PostuseReducer from './components/useReducer/PostuseReducer';
import { CalculateFactorial } from './components/Memo-Callbacks/CalculateFactorial';
//jsx must have a single element as parent


function App(props) {

  // console.log('arr in App is',props.arr);
  const [toggle,setToggle] = useState(false);
  //Props is used to pass data from Parent child
  let listArr=[];
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
      listArr=res.data;
      // console.log('response data',listArr);
    });
  },[])

  function onToggle()
  {
      setToggle(toggle=>!toggle);
  }

  return (
    <div className='app'>
      {/* <div>
        {toggle&&<ul>
            {listArr.map((item,index)=>{
              return <List k={index} itemName={item}/>
            })}
          </ul>}
          {!toggle&&<UseStateCounter/>}
          {!toggle&&<UseState2/>}
          {!toggle&&<StepTracker/>}
      </div> */}
      {/* <LifeCycle/> */}
      {/* {!toggle&&<UseEffect1></UseEffect1>} */}
      {/* <UseEffect2></UseEffect2> */}
      {/* <UseEffect3></UseEffect3> */}
      {/* <button onClick={onToggle}>Toggle</button> */}
      {/* <BookParent></BookParent> */}
      {/* <Composition/> */}
      {/* <ThemeProvider>
        <Theme></Theme>
      </ThemeProvider> */}
      {/* <ContactForm></ContactForm> */}
      {/* <ControlledInput></ControlledInput> */}
      {/* <ReactHookForm></ReactHookForm> */}
      {/* <ReducerCounter></ReducerCounter> */}
      {/* <PostuseState></PostuseState>
      <PostuseReducer></PostuseReducer> */}
      <CalculateFactorial></CalculateFactorial>
    
    </div>
  );
}

export default App;

