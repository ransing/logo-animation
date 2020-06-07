import React from 'react';
import logo from './logo.svg';
import './App.css';
import NvDems from './Logo/nvDems';
import NvVideo from './Logo/nvVideo'
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import NavBar from './Navbar/navBar';
import Background from './Background/background'

const navlinks = [
  { name: "Home", to: "/" },
  { name: "video", to: "/video" },
  { name: "Contact", to: "/contact" },
  {name: "Background", to:"/background"}
];

const brand = { name: "peekaboo", to: "home" };

function App() {
  return (
    <div className="App">
      <NavBar brand={brand} links={navlinks} />
        <Switch>
          <Route exact path='/' component={NvDems}/>
          <Route exact path='/video' component={NvVideo}/>
          <Route exact path='/background' component={Background}/>
        </Switch>
    </div>
  );
}

export default withRouter(App);
