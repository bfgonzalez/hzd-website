import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { toast } from "bulma-toast"
import classnames from "classnames"
import firebase from "firebase/app"

import Button from "./Button"

const Navbar = ({ isHome }) => {
  const [isActive, setActive] = useState(false)
  const [activeTab, setActiveTab] = useState("")
  const [navbarLinks, setNavbarLinks] = useState(["/machines", "/cauldrons"])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const history = useHistory()

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

    if (isAuthenticated) {
      setNavbarLinks(["/admin/machines", "/admin/cauldrons"])
    } else {
      setNavbarLinks(["/machines", "/cauldrons"])
    }

    return () => {
      isMounted = false // useEffect cleanup to set isMounted flag to false
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
    firebase.auth().signOut()
    toast({
      message: `<strong>Logout successful`,
      duration: 3000,
      type: "is-success",
      dismissible: true,
    })
    history.push("/")
  }

  const navbarText = ["Machines", "Cauldrons"]

  return (
    <nav
      className={classnames(
        "navbar is-fixed-top is-spaced is-transparent has-text-centered",
        !isHome && "has-background-primary"
      )}
      role="navigation">
      <div className="navbar-brand">
        <Link className="navbar-item has-text-weight-bold  is-size-4" to="/">
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
                "navbar-item ",
                activeTab === text && "has-text-weight-bold has-text-info"
              )}
              to={navbarLinks[index]}>
              {text}
            </Link>
          ))}
          {isAuthenticated ? (
            <Button text="Admin Logout" color="black" onClick={handleLogout} />
          ) : (
            <Button text="Admin Login" color="black" link="/admin/login" />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
