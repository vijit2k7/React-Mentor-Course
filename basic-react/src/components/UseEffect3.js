import React,{useState,useEffect} from 'react';
import axios from 'axios';

function UseEffect3() {
    const [post,setPost]=useState({});
    const [id,setId]=useState(1);
    const [idButton,setIdButton]=useState(1);
    const [isError,setIsError]=useState(false);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
            console.log('response useeffect 1is',res);
            setPost({...res.data});  
        });
    },[idButton]);

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
          console.log('response useffect 2 is',res);
          setPost({...res.data});  
      });
  },[]);

  function buttonClick()
  {
    console.log('button is clicked');
    if(!id||id>100||id<1)
    {
      setIsError(true);
      return;
    }
    setIsError(false);
    setIdButton(id);

  }
  return (
    <>
    <h1>UseEffect3</h1>
    <div class='input'>
    <input type='number' placeholder='Input a number'  
      onChange={(e)=>setId(e.target.value)}/>
    <button onClick={buttonClick}>Update Post</button>
    </div>
    <div class='post'>
        <h2 >{post.id} : {post.title}</h2>
        <p >{post.body}</p>
    </div>
    {isError&&<h2 class='error-msg'>
      <span>Please enter an id greater than 0 and less than 200!</span>
    </h2>}

    </>
  )
}

export default UseEffect3
