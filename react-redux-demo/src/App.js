import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>REACT-REDUX-DEMO</h2>
      </div>
    </Provider>

  );
}

export default App;
