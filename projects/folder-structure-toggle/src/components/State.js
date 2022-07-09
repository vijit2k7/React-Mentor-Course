import React from 'react'
import City from './City'
import useToggle from '../custom-hooks/useToggle';
function State({state,id}) {

  const [toggleState,toggle]=useToggle(false);
  return (
    <li id={id} onClick={toggle}>
        <h2>{state.name}</h2>
        {toggleState&&<ul>{state.cities.map((city,id)=>{
            return <City city={city} id={`city${id+1}`}></City>
        })}</ul>}

    </li>
  )
}

export default State


