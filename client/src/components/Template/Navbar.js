import React, { useState } from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

const Navbar = ({ isHome }) => {
  const [isActive, setActive] = useState(false)

  return (
    <nav
      className={classnames(
        "navbar is-fixed-top is-family-secondary is-spaced is-transparent has-text-centered",
        !isHome && "has-background-primary"
      )}
      role="navigation">
      <div className="navbar-brand">
        <Link
          className="navbar-item has-text-weight-bold has-text-white is-size-4"
          to="/">
          HORIZON ZERO DAWN
        </Link>
        <div className="navbar-burger" onClick={() => setActive(!isActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={classnames("navbar-menu", isActive === true && "is-active")}
        data-target="navbar">
        <div id="navbar" className="navbar-end is-size-5 has-text-centered">
          <Link
            className="navbar-item has-text-white has-text-weight-bold"
            to="/machines">
            Machines
          </Link>
          <Link
            className="navbar-item has-text-white has-text-weight-bold"
            to="/admin/login">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
