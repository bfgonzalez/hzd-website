import React from "react"
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
              {/* <Route path={`${url}/:name`} component={CauldronDetails} /> */}
            </>
          )}
        />
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <Route exact path={`${url}/login`} render={() => <Login />} />
              <ProtectedRoute path={`${url}/panel`} component={AdminPanel} />
              <ProtectedRoute
                path={`${url}/machines`}
                component={Machines}
                isAdmin
              />
              <ProtectedRoute
                path={`${url}/add-machine`}
                component={AddMachine}
              />
              <ProtectedRoute
                path={`${url}/edit-machine/:id`}
                component={EditMachine}
              />
              <ProtectedRoute path={`${url}/cauldrons`} component={Cauldrons} />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
