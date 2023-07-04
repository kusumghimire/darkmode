import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';
import Home from "./home";
import Profile from "./profile";

// import {Routes, Route, Redirect} from 'react-router-dom';
// import { Switch, Route, BrowserRouter as Ror} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    
    <Switch>     
       <Route  path="/profile" component={Profile} />
       <Route exact  path="/" component={Home } />
    </Switch>
    
  );
}

export default App;
