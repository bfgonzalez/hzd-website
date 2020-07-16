import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Machines from './components/Machines/Machines';
import Login from './components/Admin/Login';
import Admin from './components/Admin/Admin';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/machines' component={Machines}/>
        <Route path='/admin' component={Login}/>
        <Route path={`${process.env.REACT_APP_ADMIN_URL}`} component={Admin}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;