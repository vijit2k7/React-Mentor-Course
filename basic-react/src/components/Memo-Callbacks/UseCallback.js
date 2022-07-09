import React,{useState,useCallback} from 'react'
import MyBigList from './MyBigList';

function UseCallback() {
    
    console.log('use callback called');
    const [count,setCount]=useState(0);
    const [likes,setLikes]=useState(0);

    const onItemClick = useCallback((event) => {
        console.log('You clicked ', event.currentTarget);
        setCount(count+1);
      },[count]);
    const onLikeClick = (event) => {
        console.log('You clicked likes ', event.currentTarget);
        setLikes(likes+1);
    };

  return (
    <div> 
        <h2> Likes are: {likes}</h2>
        <h2>Count is: {count}</h2>
        <MyBigList
            click={onItemClick}
        />
        <button onClick={onItemClick}>Increment</button>
        <button onClick={onLikeClick}>Like</button>
    </div>
  )
}
function bigFunction()
{
    console.log('big function called');
    console.time();
    for(let i=0;i<1000000000;i++)
    {} 
    console.timeEnd();
    return 3000; 
}
export default UseCallback



