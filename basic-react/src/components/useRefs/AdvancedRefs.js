import React,{useState,useRef,useEffect} from 'react'

function AdvancedRefs() {

    const [name, setName] = useState('Kyle')
    const previousName = useRef(null)
  
    useEffect(() => {
      previousName.current = name
    }, [name])
  
    return (
      <>
        <input value={name} onChange={e => setName(e.target.value)} />
        <div>{previousName.current} => {name}</div>
        <LogButtonClicks></LogButtonClicks>
      </>
    )
}

function LogButtonClicks() {
    const countRef = useRef(0);
    const handle = () => {
      countRef.current++;
      console.log(`Clicked ${countRef.current} times`);
    };
    console.log('I rendered!');
    return <button onClick={handle}>Click me</button>;
  }

export default AdvancedRefs
