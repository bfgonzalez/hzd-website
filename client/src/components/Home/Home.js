import React from "react"

import Layout from "../Template/Layout"
import ButtonLink from "../Template/ButtonLink"

import "../../styles/variables.scss"
import hzdLogo from "../../assets/hzd-logo.png"

require("dotenv").config()

const Home = () => {
	return (
		<Layout isHome>
			<div className="hero-section">
				<img src={hzdLogo} alt="logo" />
				<div className="field is-grouped mt-5">
					<ButtonLink
						text="View Machine Catalogue"
						color="black"
						link="/machines"
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Home
