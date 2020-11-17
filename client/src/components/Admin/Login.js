import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { toast } from "bulma-toast"
import firebase from "firebase/app"

import Layout from "../Template/Layout"
import FormInput from "../Template/Forms/FormInput"
import Button from "../Template/Button"

require("dotenv").config()

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const history = useHistory()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleFirebaseLogin = () => {
    let data = values

    if (!Object.values(data).includes("")) {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((user) => {
          if (
            user &&
            firebase.auth().currentUser.uid ===
              process.env.REACT_APP_FIREBASE_UID
          ) {
            toast({
              message: `<strong>Login successful`,
              duration: 3000,
              type: "is-success",
              dismissible: true,
            })
            history.push(`/admin/panel`)
          } else {
            toast({
              message: `<strong>Unauthorized User ✋`,
              duration: 3000,
              type: "is-danger",
              dismissible: true,
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <Layout>
      <div className="columns is-centered is-vcentered full-height">
        <div className="login-section column is-4 is-10-mobile">
          <h1 className="title has-text-white">Login</h1>
          <form onSubmit={handleFirebaseLogin}>
            <FormInput
              name="email"
              type="email"
              onChange={handleInputChange}
              value={values.email}
              isRequired
            />
            <FormInput
              name="password"
              type="password"
              onChange={handleInputChange}
              value={values.password}
              isRequired
            />
            <Button
              text="Admin Login"
              type="submit"
              color="info"
              onClick={handleFirebaseLogin}
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
