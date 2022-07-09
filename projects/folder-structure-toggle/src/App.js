import React from 'react';
import './App.css';
import states from './data';
import State from './components/State';


function App() {

  console.log('states in app',states);
  return (
    <div>
      <ul>
      {states.map((state,id)=>{
        return <State state={state} id={'state'+(id+1)}></State>;
      })}
      </ul>
    </div>
  );
}

export default App;
