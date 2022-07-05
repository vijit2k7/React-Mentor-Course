import React,{useContext} from 'react'
import { ListContext } from './BookParent';
import BookSubSubChild from './BookSubSubChild';
// to change the title of child component
function BookSubChild(props) {

    const pages=useContext(ListContext);
    console.log('props subchild',props,pages);
  return (
    <div>BookSubChild
        <div>
            <h2>Pages : {pages}</h2>
            <BookSubSubChild/>
            <input type='text' onChange={props.onTitleChange} placeholder='Enter title'/>
        </div>
    </div>
  )
}

export default BookSubChild