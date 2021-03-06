import React, { useState, useEffect } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"

import MachineCard from "./MachineCard"
import Layout from "../Template/Layout"
import FormInput from "../Template/Forms/FormInput"
import Button from "../Template/Button"

const Machines = ({ isAdmin }) => {
  const [machines, setMachines] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setLoading] = useState(true)
  const filteredMachines = []

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/machines`)
      .then((response) => {
        // remove loading indicator after data has been fetched
        setLoading(false)

        // on initial page load, or if search bar is empty, display full list of machines
        if (searchTerm === "") {
          setMachines(response.data)
        }
        // if search bar is not empty, filter machines based on input value
        else {
          // eslint-disable-next-line
          machines.filter((machine) => {
            let search = searchTerm.toLowerCase()
            let values = Object.values(machine) // get values of each machine object

            for (let value of values) {
              if (
                value !== null &&
                value.toString().toLowerCase().includes(search)
              ) {
                // if any of the values include the search term, push the machine into the filteredMachines array
                filteredMachines.push(machine)
                break // break out of the loop as soon as the condition is met the first time
              }
            }
          })
          setMachines(filteredMachines)
        }
      })
      .catch((error) => console.log(error))
    // eslint-disable-next-line
  }, [searchTerm])

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Layout>
      <div className="data-section">
        <h1 className="has-text-white title is-inline">Machines</h1>
        {isAdmin && (
          <div className="is-pulled-right">
            <Button text="Add Machine" color="info" link="/admin/add-machine" />
          </div>
        )}
        <div className="mt-4">
          <FormInput
            name="search"
            type="text"
            onChange={handleInputChange}
            value={searchTerm}
          />
        </div>
        {isLoading ? (
          <div className="loading-indicator columns is-centered is-mobile is-vcentered">
            <Loader type="Oval" color="#29cdfb" height={100} width={100} />
          </div>
        ) : (
          <div className="columns is-multiline mt-2">
            {machines.map((machine, index) => (
              <div
                className="column is-one-third-desktop is-half-tablet"
                key={index}>
                <MachineCard data={machine} index={index} isAdmin={isAdmin} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Machines
