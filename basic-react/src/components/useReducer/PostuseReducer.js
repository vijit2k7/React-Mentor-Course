import React,{useEffect,useReducer} from 'react'
import axios from 'axios';
const initialState={
    title: '',
    body: '',
    isLoading: true,
    error: ''
}


function reducer(state,action){
    if(action.type==='success')
    {
        return {...state,title:action.payload.title,
            body:action.payload.body,isLoading:false}
    }
    else
    {
        return {...state,error:action.payload,isLoading:false};
    }
}

function PostuseReducer() {

    const [state, dispatch] = useReducer(reducer,initialState);
    useEffect(async ()=>{
        try{
        const res = await axios.get('https://jsonplaceholder.typicod.com/posts/1');
            dispatch({type:'success',payload:res.data})
        }catch(err){
            dispatch({type:'error',payload:'Something went wrong!!'})
        }
    },[])
  return (
    <div>
        <h1>{state.title}</h1>
        <p>{state.body}</p>
        {state.isLoading&&<h2>Loading....</h2>}
        <h2>{state.error}</h2>
    </div>
  )
}

export default PostuseReducer