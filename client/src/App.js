import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// import Layout from './components/Template/Layout';
import Home from "./components/Home/Home"
import Machines from "./components/Machines/Machines"
import Login from "./components/Admin/Login"
import AdminPanel from "./components/Admin/AdminPanel"
import AddMachine from "./components/Admin/AddMachine"
import EditMachine from "./components/Admin/EditMachine"
import MachineDetails from "./components/Machines/MachineDetails"

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
        <Route path="/hello" component={MachineDetails} />
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/login`} component={Login} exact />
              <Route path={`${url}/machines`} component={AdminPanel} />
              <Route path={`${url}/add-machine`} component={AddMachine} />
              <Route path={`${url}/edit-machine/:id`} component={EditMachine} />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
