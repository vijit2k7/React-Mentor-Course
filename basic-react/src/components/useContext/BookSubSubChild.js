import React,{useContext} from 'react'
import { ListContext } from './BookParent';

function BookSubSubChild() {

const pages=useContext(ListContext)
  return (
    <div>BookSubSubChild
        <h2>Pages subsubchild : {pages}</h2>
    </div>
  )
}

export default BookSubSubChild