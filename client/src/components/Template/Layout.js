import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, isHome }) => {
	return (
		<div className="has-background-primary">
			<Navbar isHome={isHome} />
			<div className="has-navbar-fixed-top">
				<main>{children}</main>
			</div>
			<Footer />
		</div>
	)
}

export default Layout
