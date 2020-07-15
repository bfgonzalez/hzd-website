import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Machines = () => {
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
    <div>
      <ol>
        {machines.map((machine, index) => {
          return (
          <li>{Object.values(machine)}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default Machines;