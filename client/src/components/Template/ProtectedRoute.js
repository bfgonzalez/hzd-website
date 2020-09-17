import React, { useState, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { FirebaseAuthConsumer } from "@react-firebase/auth"
import firebase from "firebase/app"
import Loader from "react-loader-spinner"

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
  const [userID, setUserID] = useState("")
  const [isLoading, setLoading] = useState(true)

  // check if user is logged in
  useEffect(() => {
    let isMounted = true // note: this flag denotes mount status
    setLoading(true)

    firebase.auth().onAuthStateChanged((user) => {
      if (user && isMounted) {
        setUserID(user.uid)
        setLoading(false)
      } else {
        setUserID("")
      }
    })

    return () => {
      isMounted = false // useEffect cleanup to set isMounted flag to false
    }
  }, [])

  return (
    <FirebaseAuthConsumer>
      <Route
        {...rest}
        render={(props) => {
          if (isLoading) {
            return (
              <div className="loading-indicator columns is-centered is-mobile is-vcentered">
                <Loader type="Oval" color="#29cdfb" height={100} width={100} />
              </div>
            )
          } else if (userID === process.env.REACT_APP_FIREBASE_UID) {
            return <Component isAdmin />
          } else {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            )
          }
        }}
      />
    </FirebaseAuthConsumer>
  )
}

export default ProtectedRoute
