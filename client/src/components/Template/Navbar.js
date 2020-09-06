import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import classnames from "classnames"

import Button from "./Button"

const Navbar = ({ isHome }) => {
  const [isActive, setActive] = useState(false)
  const [activeTab, setActiveTab] = useState("")
  const [navbarLinks, setNavbarLinks] = useState(["/machines", "/cauldrons"])

  const history = useHistory()

  const isAuthenticated = sessionStorage.getItem("isAuthenticated")

  useEffect(() => {
    if (isAuthenticated) {
      setNavbarLinks(["/admin/machines", "/admin/cauldrons"])
    } else {
      setNavbarLinks(["/machines", "/cauldrons"])
    }
  }, [isAuthenticated])

  // handle activeTab state
  useEffect(() => {
    let url = window.location.href
    let slug = url.split("/").pop()

    switch (slug) {
      case "machines":
        setActiveTab("Machines")
        break
      case "cauldrons":
        setActiveTab("Cauldrons")
        break
      case "login":
        setActiveTab("Admin")
        break
      default:
        setActiveTab("")
    }
  }, [activeTab])

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated")
    history.push("/")
  }

  const navbarText = ["Machines", "Cauldrons"]

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
          {navbarText.map((text, index) => (
            <Link
              key={index}
              className={classnames(
                "navbar-item has-text-white",
                activeTab === text && "has-text-weight-bold"
              )}
              to={navbarLinks[index]}>
              {text}
            </Link>
          ))}
          {isAuthenticated ? (
            <Button text="Logout" color="black" onClick={handleLogout} />
          ) : (
            <Button text="Login" color="black" link="/admin/login" />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
