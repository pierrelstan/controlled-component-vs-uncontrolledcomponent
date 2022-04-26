import React from 'react';
import './App.css';
import ControlComponents from './components/ControlComponent';
import UnControlledComponent from './components/UnControlledComponent';

function App() {
  return (
    <div className="App">
    <h1>Controlled Component</h1>
      <ControlComponents />

      <h1>UnControlled Components</h1>
      <UnControlledComponent />
    </div>
  );
}

export default App;
