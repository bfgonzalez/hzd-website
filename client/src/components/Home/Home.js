import React, { useState, useEffect} from 'react';

import axios from 'axios';
import '../../styles/variables.scss';
import hzdLogo from '../../assets/hzd-logo.png';

require('dotenv').config()

const App = () => {
  const [machines, setMachines] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`)
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
      <div className="hero-section">
        <img src={hzdLogo} className="App-logo" alt="logo" />
        <div className="buttons">
          <a className="button is-link has-text-weight-bold mt-5">View Machine Catalogue</a>
        </div>
        <ol>
          {machines.map((machine, index) => {
            return (
            <li>{Object.values(machine)}</li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default App;
