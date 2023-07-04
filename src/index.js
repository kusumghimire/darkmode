import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import AppContainer from './common/containers/App';
import './styles/_main.scss';
// import Routes from './routes';
import { ThemeProvider } from "./ThemeContext";


ReactDOM.render(
  <Router>
     <ThemeProvider />
  </Router>,
  document.getElementById('root')
);
