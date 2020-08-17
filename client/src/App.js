import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Layout from './components/Template/Layout';
import Home from './components/Home/Home';
import Machines from './components/Machines/Machines';
import Login from './components/Admin/Login';
import AdminPanel from './components/Admin/AdminPanel';
import AddMachine from './components/Admin/AddMachine';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/machines' component={Machines}/>
        <Route
          path="/admin"
          render={({ match: {url} }) => (
            <>
              <Route path={`${url}/login`} component={Login} exact />
              <Route path={`${url}/machines`} component={AdminPanel}/>
              <Route path={`${url}/add-machine`} component={AddMachine}/>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App;