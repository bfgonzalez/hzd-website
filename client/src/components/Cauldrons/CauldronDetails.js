import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

import Layout from "../Template/Layout"

const DetailsPanel = ({ labels, values }) => {
  const history = useHistory()
  return (
    <div className="content has-text-white is-medium">
      {labels.map((label, index) => {
        let value = values.slice(2)[index] // display all values except id & name
        if (value === null) value = "None"

        return (
          <p key={index}>
            <strong className="has-text-white">{label}</strong>: {value}
          </p>
        )
      })}
      <button
        className="button has-text-weight-bold"
        onClick={() => history.go(-1)}>
        Back
      </button>
    </div>
  )
}

const CauldronDetails = ({ match }) => {
  const [cauldronDetails, setCauldronDetails] = useState([])

  const {
    params: { name },
  } = match

  // replaces all "-" with space
  let cauldronName = name.replace(/-/g, " ")

  // retain name format (cauldron-name) but make lower case
  let cauldronImage = name.toLowerCase()

  const cauldronHeaders = ["Location", "Enemies", "Rewards"]

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/cauldrons/filter?name=${cauldronName}`
      )
      .then((response) => {
        setCauldronDetails(response.data)
      })
  }, [cauldronName])

  return (
    <Layout>
      <div className="cauldron-details-section">
        <div className="columns is-centered is-vcentered">
          <div className="column is-8 is-12-mobile has-text-centered">
            <h1 className="title has-text-white">{cauldronName}</h1>
            <img
              src={require(`../../assets/cauldrons/${cauldronImage}.png`)}
              alt={`${name}`}
            />
          </div>
          <div className="column is-4 has-text-left p-4">
            {cauldronDetails.map((cauldron, index) => {
              let cauldronValues = Object.values(cauldron)

              return (
                <DetailsPanel
                  labels={cauldronHeaders}
                  values={cauldronValues}
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

export default CauldronDetails
