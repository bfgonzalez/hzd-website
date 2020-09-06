import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./components/Home/Home"
import Machines from "./components/Machines/Machines"
import Cauldrons from "./components/Cauldrons/Cauldrons"
import Login from "./components/Admin/Login"
import AdminPanel from "./components/Admin/AdminPanel"
import AddMachine from "./components/Admin/AddMachine"
import EditMachine from "./components/Admin/EditMachine"
import MachineDetails from "./components/Machines/MachineDetails"

import ProtectedRoute from "./components/Template/ProtectedRoute"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
    sessionStorage.setItem("isAuthenticated", isAuthenticated)
  }

  const persistAuthentication = sessionStorage.getItem("isAuthenticated")

  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/machines"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}`} component={Machines} exact />
              <Route path={`${url}/:name`} component={MachineDetails} />
            </>
          )}
        />
        <Route
          path="/cauldrons"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}`} component={Cauldrons} exact />
              {/* <Route path={`${url}/:name`} component={MachineDetails} /> */}
            </>
          )}
        />
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <Route
                exact
                path={`${url}/login`}
                render={() => <Login handleLogin={handleLogin} />}
              />
              <ProtectedRoute
                isAuthenticated={persistAuthentication}
                path={`${url}/machines`}
                component={AdminPanel}
              />
              <ProtectedRoute
                isAuthenticated={persistAuthentication}
                path={`${url}/add-machine`}
                component={AddMachine}
              />
              <ProtectedRoute
                isAuthenticated={persistAuthentication}
                path={`${url}/edit-machine/:id`}
                component={EditMachine}
              />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
