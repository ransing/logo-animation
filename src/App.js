import React from 'react';
import logo from './logo.svg';
import './App.css';
import NvDems from './Logo/nvDems';
import NvVideo from './Logo/nvVideo'
import { Route, Switch, withRouter, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={NvDems}/>
          <Route exact path='/video' component={NvVideo}/>
        </Switch>
    </div>
  );
}

export default withRouter(App);
