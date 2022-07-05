import React,{useState,useEffect} from 'react'
import axios from 'axios';
function PostuseState() {

    const [title,setTitle]=useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError]=useState('');
    const [body,setBody]=useState('');

    useEffect(async ()=>{
        try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setTitle(res.data.title);
        setBody(res.data.body)
        setIsLoading(false);
        }catch(err){
            console.log('error is',err);
            setError('Something went wrong!!Plz try again!');
            setIsLoading(false);
        }
    },[])
  return (
    <div>
        <h1>{title}</h1>
        <p>{body}</p>
        {isLoading&&<h2>Loading....</h2>}
        <h2>{error}</h2>
    </div>
  )
}

export default PostuseState

