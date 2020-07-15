import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Machines from './components/Machines/Machines';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/machines' component={Machines}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;