import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import Layout from "../Template/Layout"
import FormInput from "../Template/FormInput"
import Button from "../Template/Button"

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  const history = useHistory()

  const [authorizationMessage, setAuthorizationMessage] = useState("")

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      values.username === `${process.env.REACT_APP_USERNAME}` &&
      values.password === `${process.env.REACT_APP_PASSWORD}`
    ) {
      sessionStorage.setItem("isAuthenticated", true)
      history.push("/admin/panel")
    } else {
      sessionStorage.setItem("isAuthenticated", false)
      setValues({
        username: "",
        password: "",
      })
      setAuthorizationMessage("Unauthorized User ✋")
    }
  }

  return (
    <Layout>
      <div className="columns is-centered is-vcentered full-height">
        <div className="login-section column is-4 is-10-mobile">
          <h1 className="title has-text-white">Login</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="username"
              type="text"
              onChange={handleInputChange}
              value={values.username}
              isRequired
            />
            <FormInput
              name="password"
              type="password"
              onChange={handleInputChange}
              value={values.password}
              isRequired
            />
            <p className="has-text-white has-text-weight-bold mb-2">
              {authorizationMessage}
            </p>
            <Button
              text="Login"
              type="submit"
              color="info"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
