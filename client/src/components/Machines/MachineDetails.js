import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

import Layout from "../Template/Layout"

const DetailsPanel = ({ labels, values }) => {
  const history = useHistory()

  return (
    <div className="content has-text-white is-medium">
      {labels.map((label, index) => {
        let value = values.slice(2)[index] // display all values except for id and name
        if (value === null) value = "None" // if value is null, display "None" instead of blank

        return (
          <p key={index}>
            <strong className="has-text-white">{label}</strong>: {value}
          </p>
        )
      })}
      <button
        className="button has-text-weight-bold"
        onClick={() => history.go(-1)}>
        Go Back to Machine Catalogue
      </button>
    </div>
  )
}

const MachineDetails = ({ match }) => {
  const [machineDetails, setMachineDetails] = useState([])

  const {
    params: { name },
  } = match

  // replaces all "-" with space (except for Shell-Walker)
  let machineName = name.replace(/-/g, " ")
  if (name === "Shell-Walker") machineName = name

  // retain name format (machine-name) but make lower case
  let machineImage = name.toLowerCase()

  const machineHeaders = [
    "Size",
    "Origin",
    "Override",
    "Class",
    "Machine Sites",
    "Weakness",
    "Strength",
    "Weak Points",
    "Explosive Components",
  ]

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/filter?name=${machineName}`)
      .then((response) => {
        setMachineDetails(response.data)
      })
  }, [machineName])

  return (
    <Layout>
      <div className="machine-details-section">
        <div className="columns is-centered is-vcentered">
          <div className="column is-8 is-12-mobile has-text-centered">
            <h1 className="title has-text-white">{machineName}</h1>
            <img
              src={require(`../../assets/machines/${machineImage}.png`)}
              alt={`${name}`}
            />
          </div>
          <div className="column is-4 has-text-left p-4">
            {machineDetails.map((machine, index) => {
              let machineValues = Object.values(machine)

              return (
                <DetailsPanel
                  labels={machineHeaders}
                  values={machineValues}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MachineDetails
