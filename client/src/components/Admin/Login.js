import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import Layout from "../Template/Layout"

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      username === `${process.env.REACT_APP_USERNAME}` &&
      password === `${process.env.REACT_APP_PASSWORD}`
    ) {
      handleLogin()
      history.push(`${process.env.REACT_APP_ADMIN_URL}`)
    } else {
      alert("unauthorized user")
    }
  }

  return (
    <Layout>
      <div className="columns is-centered is-vcentered full-height">
        <div className="login-section column is-4 is-10-mobile">
          <h1 className="title has-text-white">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input is-primary"
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input is-primary"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <button
              className="button is-black has-text-weight-bold"
              type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
