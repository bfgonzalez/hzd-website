import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import classnames from "classnames"

import ButtonLink from "./ButtonLink"

const Navbar = ({ isHome }) => {
  const [isActive, setActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const history = useHistory()

  useEffect(() => {
    let url = window.location.href
    // if url contains "login", keep isLoggedIn === false
    if (/login/.test(url)) {
      setIsLoggedIn(false)

      // if url contains any urls with "admin" (except "login"), set isLoggedIn === true
    } else if (/admin/.test(url)) {
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated")
    history.push("/")
  }

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
          {isLoggedIn && (
            <button
              className="button is-black has-text-weight-bold"
              onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
