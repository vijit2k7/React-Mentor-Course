import React, {useState} from "react";
import '../styles/App.css';
const App = ({slides}) => {

  const [index,setIndex]=useState(0);

  
  return (
        <div>
         <div id='slide'>
           <h1 data-testid="title">{index} : {slides[index].title}</h1>
           <p data-testid="text">{slides[index].text}</p>
         </div>
         <div id='navigation'>
            <button disabled={index===0} onClick={()=>setIndex(index-1)}>Prev</button>
            <button disabled={index===slides.length-1} onClick={()=>setIndex(index+1)}>Next</button>
            <button disabled={index===0} onClick={()=>setIndex(0)}>Restart</button>
         </div>
        </div>
      )
}



export default App;


/*What things we need to do in this project
1. Get the slides from index as props to app.js
2. Print the first slide on the Dom using index.
3. Create a state variable which will keep track of indexes in the slides
4. 3 buttons to create-->prev,next and restart
5. prev---> disabled when first slide ,next--->disabled when last slide,restart--->
  first slide
*/
