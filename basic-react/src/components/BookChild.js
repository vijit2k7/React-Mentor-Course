import React from 'react'

export const BookChild = (props) => {

    console.log('props child',props);

  return (
    <div>
        <h2>BookChild</h2>
        {/* {props.books.map((item,id)=>{
            return <li key={id}>
                <p>{item.title}</p>
                <p>{item.author}</p>
            </li>
        })} */}
        <input onChange={props.onTitleChange}/>TitleChange
        </div>
  )
}
