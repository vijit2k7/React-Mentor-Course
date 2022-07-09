import React from 'react'
import useDebounce from './custom-hooks/useDebounce';
function CounterDebounce() {
    const [value, setValue] = React.useState(0);
    const lastValue = useDebounce(value, 1000);
  
    return (
      <div>
        <p>
          Current: {value} - Debounced :{lastValue} 
        </p>
        <button onClick={() => setValue(value + 1)}>Increment</button>
      </div>
    );
}

export default CounterDebounce