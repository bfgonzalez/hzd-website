import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Joi from "joi-browser"

import Layout from "../Template/Layout"
import FormInput from "../Template/FormInput"
import Button from "../Template/Button"

import { loginValidationSchema } from "../../validationSchema"

const Login = ({ handleLogin }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState("")
  const [authorizationMessage, setAuthorizationMessage] = useState("")

  const validateValues = () => {
    Joi.validate(values, loginValidationSchema, (error) => {
      if (error) {
        console.log(error)
        setErrorMessage(error.message)
      } else {
        setErrorMessage("")
      }
    })
  }

  const handleInputBlur = () => {
    validateValues()
  }

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
      setAuthorizationMessage("Unauthorized User")
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
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              value={values.username}
              required
            />
            <FormInput
              name="password"
              type="password"
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              value={values.password}
              required
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
