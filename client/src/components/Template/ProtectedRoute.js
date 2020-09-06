import React from "react"
import { Route, Redirect } from "react-router-dom"

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated")

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component isAdmin />
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
