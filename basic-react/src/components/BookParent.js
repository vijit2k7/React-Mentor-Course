import React from 'react'
import { BookChild } from './BookChild'

export const BookParent = () => {
    let list = [
        { title: 'A Christmas Carol', author: 'Charles Dickens' },
        { title: 'The Mansion', author: 'Henry Van Dyke' },
      ]

    function handleChange(e)
    {
        console.log('in parent',e.target.value);
    }
  return (
    <div>
        <h1>BookParent</h1>
        <BookChild books={list} onTitleChange={handleChange}></BookChild>
    </div>
  )
}
