import React,{useRef} from 'react'

function FocusRef() {

    const inputRef=useRef(null);
    function focusInput(){
        console.log('inputRef is',inputRef);
        inputRef.current.focus();
    }
  return (
    <>
    <input ref={inputRef} value='Input1' id='input-1'/>1
    <input ref={inputRef} value='Input2' id='input-2'/>2
    <button onClick={focusInput}>Focus Input</button>
  </>
  )
}

export default FocusRef