import React from 'react'

export const List = (props) => {

console.log('props list',props);
  return (
    <>
        <li key={props.k}>{props.itemName.name}</li>
        <span>Reviews : {props.itemName.reviews}</span>
    </>

  )
}

