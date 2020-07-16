import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '../Table/Table';

const machineHeaders = ['Name', 'Size', 'Origin', 'Override', 'Class', 'Machine Sites', 'Weakness', 'Strength', 'Weak Points'];

const Machines = () => {
  const [machines, setMachines] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`)
    .then(response => setMachines(response.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1 className='title'>Machines</h1>
      <Table headers={machineHeaders} data={machines}/>
    </div>

  )
}

export default Machines;