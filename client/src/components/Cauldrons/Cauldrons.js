import React, { useState, useEffect } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"

import CauldronCard from "../Cauldrons/CauldronCard"
import Layout from "../Template/Layout"
import Button from "../Template/Button"

const Cauldrons = ({ isAdmin }) => {
  const [cauldrons, setCauldrons] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cauldrons`)
      .then((response) => {
        // remove loading indicator after data has been fetched
        setLoading(false)
        setCauldrons(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Layout>
      <div className="data-section">
        <h1 className="has-text-white title is-inline">Cauldrons</h1>
        {isAdmin && (
          <div className="is-pulled-right">
            <Button
              text="Add Cauldron"
              color="info"
              link="/admin/add-cauldron"
            />
          </div>
        )}
        {isLoading ? (
          <div className="loading-indicator columns is-centered is-mobile is-vcentered">
            <Loader type="Oval" color="#29cdfb" height={100} width={100} />
          </div>
        ) : (
          <div className="columns is-multiline mt-2">
            {cauldrons.map((cauldron, index) => (
              <div className="column is-half" key={index}>
                <CauldronCard data={cauldron} index={index} isAdmin={isAdmin} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Cauldrons
