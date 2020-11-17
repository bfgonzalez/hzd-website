import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import firebase from "firebase/app"
import "firebase/auth"
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth"
import { firebaseConfig } from "./firebase/config"

import Home from "./components/Home/Home"
import Login from "./components/Admin/Login"
import AdminPanel from "./components/Admin/AdminPanel"
import Machines from "./components/Machines/Machines"
import AddMachine from "./components/Machines/AddMachine"
import EditMachine from "./components/Machines/EditMachine"
import MachineDetails from "./components/Machines/MachineDetails"

import Cauldrons from "./components/Cauldrons/Cauldrons"
import AddCauldron from "./components/Cauldrons/AddCauldron"
import EditCauldron from "./components/Cauldrons/EditCauldron"
import CauldronDetails from "./components/Cauldrons/CauldronDetails"

import ProtectedRoute from "./components/Template/ProtectedRoute"

const App = () => {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
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
                  <Route path={`${url}/:name`} component={CauldronDetails} />
                </>
              )}
            />
            <Route
              path="/admin"
              render={({ match: { url } }) => (
                <>
                  <Route exact path={`${url}/login`} render={() => <Login />} />
                  <ProtectedRoute
                    path={`${url}/panel`}
                    component={AdminPanel}
                  />
                  <ProtectedRoute
                    path={`${url}/machines`}
                    component={Machines}
                  />
                  <ProtectedRoute
                    path={`${url}/add-machine`}
                    component={AddMachine}
                  />
                  <ProtectedRoute
                    path={`${url}/edit-machine/:id`}
                    component={EditMachine}
                  />
                  <ProtectedRoute
                    path={`${url}/cauldrons`}
                    component={Cauldrons}
                  />
                  <ProtectedRoute
                    path={`${url}/add-cauldron`}
                    component={AddCauldron}
                  />
                  <ProtectedRoute
                    path={`${url}/edit-cauldron/:id`}
                    component={EditCauldron}
                  />
                </>
              )}
            />
          </Switch>
        </BrowserRouter>
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  )
}

export default App
