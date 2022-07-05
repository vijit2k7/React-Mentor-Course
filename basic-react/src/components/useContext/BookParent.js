import React from 'react'
import { BookChild } from './BookChild'

const ListContext = React.createContext(null);

export const BookParent = () => {
    let list = [
        { title: 'A Christmas Carol', author: 'Charles Dickens',pages:750 },
        { title: 'The Mansion', author: 'Henry Van Dyke',pages:500 },
      ]
    

  return (
    <div>
        <h1>BookParent</h1>
        
          {list.map((item,id)=>{
            return (
            <ListContext.Provider value={item.pages}>
              <BookChild id={id} title={item.title} author={item.author}></BookChild>
            </ListContext.Provider>
            )
          })}
  
    </div>
  )
}

export {ListContext};


