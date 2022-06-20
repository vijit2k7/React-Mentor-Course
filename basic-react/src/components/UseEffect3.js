import React,{useState,useEffect} from 'react';
import axios from 'axios';

function UseEffect3() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
            console.log('response is',res);
            setPosts([...res.data]);  
        });
    },[]);
    //
  return (
    <>
    <h1>UseEffect3</h1>
    {posts.map((item,id)=>{
        return <h2 key={id}>{item.title}</h2>
    })}
    </>
  )
}

export default UseEffect3