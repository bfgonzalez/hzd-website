import React from "react"

import Layout from "../Template/Layout"
import Button from "../Template/Button"

import "../../styles/variables.scss"
import hzdLogo from "../../assets/hzd-logo.png"

require("dotenv").config()

const Home = () => {
  return (
    <Layout isHome>
      <div className="hero-section">
        <img src={hzdLogo} alt="logo" />
        <div className="field is-grouped mt-1 is-hidden-desktop">
          <Button text="Machines" link="/machines" />
          <Button text="Cauldrons" color="info" link="/cauldrons" />
        </div>
      </div>
    </Layout>
  )
}

export default Home
