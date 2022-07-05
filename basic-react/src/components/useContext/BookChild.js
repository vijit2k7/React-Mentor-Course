import React,{useState} from 'react'
import BookSubChild from './BookSubChild';
export const BookChild = ({title,author,id}) => {
  console.log('book child props',title,author);

  const [title1,setTitle1]=useState(title);

  function handleChange(e)
  {
    console.log('in parent handleChange',e.target.value);
    setTitle1(e.target.value);
  }
  return (
      <div>
          <h2>BookChild</h2>
          <p>Title : {title1}</p>
          <p>Author : {author}</p>
          <BookSubChild id={id} titleSubChild={title} onTitleChange={handleChange}/>
        </div>
  )
}

//3 step method-->
// handleChange---> in your parent
//handleChange in child as props--->
// to run the props.handleChange as eventlistener parameter.
