import React from 'react'

function Town({town,id}) {
  return (
    <li id={id} key={id}>
        <h3>{town.name}</h3>
    </li>
  )
}

export default Town