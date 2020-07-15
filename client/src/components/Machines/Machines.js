import React, { useState, useEffect } from 'react';
import axios from 'axios';

const headers = ['Name', 'Size', 'Origin', 'Override', 'Class', 'Machine Sites', 'Weakness', 'Strength', 'Weak Points'];

const Machines = () => {
  const [machines, setMachines] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`)
    .then(response => setMachines(response.data))
    .catch(error => console.log(error))
  }, [])


  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {machines.map((machine, index) => {
          return (
            <tr key={index}>
              <td>{machine.name}</td>
              <td>{machine.size}</td>
              <td>{machine.origin}</td>
              <td>{machine.override}</td>
              <td>{machine.class}</td>
              <td>{machine.machine_sites}</td>
              <td>{machine.weakness}</td>
              <td>{machine.strength}</td>
              <td>{machine.weak_points}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Machines;