import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the Horizon Zero Dawn Wiki!</p>
        <p>Go to /machines for a list of the machines that are already in the database</p>
      </header>
    </div>
  )
}

export default App;
