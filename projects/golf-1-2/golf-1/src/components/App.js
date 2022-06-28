import React, { Component, useState,useEffect } from "react";
import '../styles/App.css';

function App(){

    const [state,setState]=useState({renderBall: false,posi : 0,
        ballPosition: { left: "0px" }})

    useEffect(()=>{
        window.addEventListener('keydown',handleKeyDown);

    },[])
    function handleKeyDown(e){
        console.log('event is',e.keyCode);
        if(e.keyCode===39)
        {
            console.log('state on key down',state);
            setState((prevState)=>{
                return {renderBall:true,posi:(prevState.posi+5),ballPosition:{left: (prevState.posi+5)+"px"}}
            })
        }
    }
    function buttonClickHandler() {
        setState({...state,renderBall:true});
   }
   console.log('state is',state);
    function renderBallOrButton() {
		if (state.renderBall) {
		    return <div className="ball" style={state.ballPosition}></div>
		} else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
    }

        return (
            <div tabIndex="0" className="playground">
                {renderBallOrButton()}
            </div>
        )

}


export default App;


