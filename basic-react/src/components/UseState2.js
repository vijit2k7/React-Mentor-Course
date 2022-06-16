import React,{useState} from 'react'
let i=0;
export const UseState2 = () => {

   const [preferences, setPreferences] = useState({
        backgroundColor: 'red',
        fontSize: '40px'
       });
    const [array,setArray]=useState([]);
    console.log('hello preference',{...preferences});


    function changeColor()
    {
        // setPreferences()
        setPreferences({...preferences,backgroundColor:'aqua',color:'green'});
    }
    function addItems()
    {
        i+=1;
        setArray(array=>[...array,'item '+i])
    }
  return (
    <div >
        <p style={preferences}>
            This is a test line to test useState Object.
        </p>
        <button onClick={changeColor}>ChangeColor</button>
        {array.map((item)=>{
            return <li>{item}</li>;
        })}
        <button onClick={addItems}>Add</button>
    </div>
  )
}
