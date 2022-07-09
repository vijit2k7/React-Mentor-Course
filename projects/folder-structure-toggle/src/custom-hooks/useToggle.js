import {useState,useCallback} from 'react'

function useToggle(initialValue) {

    const [state,setState]=useState(initialValue);
    const toggle=useCallback((event)=>{
        setState(state=>!state);
        if(event)
            event.stopPropagation();
    },[]);
    console.log('toggle function created',toggle);
    return [state,toggle];
}

export default useToggle