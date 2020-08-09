import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../Template/Layout';
import Table from '../Template/Table';

const machineHeaders = ['Name', 'Size', 'Origin', 'Override', 'Class', 'Machine Sites', 'Weakness', 'Strength', 'Weak Points'];

const Machines = () => {
  const [machines, setMachines] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`)
    .then(response => setMachines(response.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <Layout>
      <div className="machines-section">
        <h1 className="mt-5 has-text-white title">Machine Catalogue</h1>
        <Table headers={machineHeaders} data={machines}/>
      </div>
    </Layout>

  )
}

export default Machines;