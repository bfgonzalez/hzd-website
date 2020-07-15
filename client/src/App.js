import React, { useState, useEffect} from 'react';
import hzdLogo from './assets/hzd-logo.png';

import './App.css';

import axios from 'axios';

require('dotenv').config()

const App = () => {
  const [machines, setMachines] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`)
    // axios.get(`https://localhost:8080/machines`)
    .then(response => {
      console.log(response.data[0])
      setMachines(response.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={hzdLogo} className="App-logo" alt="logo" />
        <p>Welcome to the Horizon Zero Dawn Wiki! Here's a list of machines from the database:</p>
        <ol>
          {machines.map((machine, index) => {
            return (
            <li>{Object.values(machine)}</li>
            )
          })}
        </ol>
      </header>
    </div>
  )
}

export default App;
