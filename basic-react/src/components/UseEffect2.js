import React,{useState,useEffect} from 'react';

function UseEffect2() {
 const [count, setCount] = useState(0);
 const [count2, setCount2] = useState(0);
//  const [name,setName]=useState('');
 useEffect(()=>{
    console.log('useEffect rendered');

 },[count]);  //componentDidUpdate

 function update()
 {
     setCount(count=>count+1);
 }
  return (
    <>
        <h1>USE -EFFECT 2</h1>
        <h1>Count is : {count}</h1>
        <h1>Count2 is : {count2}</h1>
        {/* {name&&<h1>My name is Vijit</h1>} */}
        <button onClick={update}>Update Count1</button>
        <button >Update Count2</button>
    </>

  )
}

export default UseEffect2;

