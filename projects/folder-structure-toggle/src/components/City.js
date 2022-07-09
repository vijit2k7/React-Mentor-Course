import React from 'react'
import Town from './Town'
import useToggle from '../custom-hooks/useToggle';

function City({city,id}) {

    const [toggleCity,toggle]=useToggle(false);
  return (
    <li id={id} onClick={toggle}>
        <h2>{city.name}</h2>
        {toggleCity&&<ul>
        {city.towns.map((town,id)=>{
            return <Town town={town} id={`town${id+1}`}></Town>
        })}
        </ul>}
    </li>
  )
}

export default City