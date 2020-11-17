import React, { useState, useEffect } from "react"
import firebase from "firebase/app"

import Layout from "../Template/Layout"
import Button from "../Template/Button"

import "../../styles/variables.scss"
import hzdLogo from "../../assets/hzd-logo.png"

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // check if user is logged in
  useEffect(() => {
    let isMounted = true // note: this flag denotes mount status

    firebase.auth().onAuthStateChanged((user) => {
      if (
        isMounted &&
        user &&
        user.uid === process.env.REACT_APP_FIREBASE_UID
      ) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    })

    return () => {
      isMounted = false // useEffect cleanup to set isMounted flag to false
    }
  }, [isAuthenticated])

  return (
    <Layout isHome>
      <div className="hero-section">
        <img src={hzdLogo} alt="logo" />
        <div className="field is-grouped mt-1 is-hidden-desktop">
          <Button
            text="Machines"
            link={isAuthenticated ? "/admin/machines" : "/machines"}
          />
          <Button
            text="Cauldrons"
            color="info"
            link={isAuthenticated ? "/admin/cauldrons" : "/cauldrons"}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
