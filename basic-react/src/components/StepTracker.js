import React, { useState } from 'react';

export const StepTracker= ()=> {
  const [steps, setSteps] = useState(0);
  const [prevSteps,setPrevSteps]=useState(-1);
  function increment() {
    setSteps(prevState => {
       setPrevSteps(prevState);
       return prevState + 1;
    });
  }

  return (
    <div>
      Today you've taken {steps} steps!
      Previous Steps {prevSteps}
      <br />
      <button onClick={increment}>
        I took another step
      </button>
    </div>
  );
}

