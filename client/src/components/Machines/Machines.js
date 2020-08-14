import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../Template/Layout';
import Table from '../Template/Table';

const machineHeaders = ['Name', 'Size', 'Origin', 'Override', 'Class', 'Machine Sites', 'Weakness', 'Strength', 'Weak Points', 'Explosive Components'];

const Machines = () => {
  const [machines, setMachines] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const filteredMachines = [];

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`)
    .then(response => {
      // on initial page load, or if search bar is empty, display full list of machines
      if(searchTerm === "") {
        setMachines(response.data)
      }
      // if search bar is not empty, filter machines based on input value
      else {
        machines.filter(machine => {
          let search = searchTerm.toLowerCase();
          let values = Object.values(machine); // get values of each machine object

          for (let value of values) {
            if(value.toString().toLowerCase().includes(search)) {
              // if any of the values include the search term, push the machine into the filteredMachines array
              filteredMachines.push(machine);
              break; // break out of the loop as soon as the condition is met the first time
            }
          }
        });
        setMachines(filteredMachines);
      }
    })
    .catch(error => console.log(error))
    // eslint-disable-next-line
  }, [searchTerm])

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <Layout>
      <div className="machines-section">
        <h1 className="mt-6 pt-6 has-text-white title">Machine Catalogue</h1>
        <div className="field">
          <div className="control">
            <input className="input is-primary" name="search" type="text" onChange={handleInputChange} value={searchTerm} placeholder="Search Machines"/>
          </div>
        </div>
        <Table headers={machineHeaders} data={machines}/>
      </div>
    </Layout>

  )
}

export default Machines;