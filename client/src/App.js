import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StaticRouter } from "react-router";

// import Layout from './components/Template/Layout';
import Home from './components/Home/Home';
import Machines from './components/Machines/Machines';
import Login from './components/Admin/Login';
import AddMachine from './components/Admin/AddMachine';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/machines' component={Machines}/>
        <Route path='/admin' component={Login}/>
        <Route path={`${process.env.REACT_APP_ADMIN_URL}`} component={AddMachine}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;