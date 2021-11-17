
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './menu/Menu';
import MyCard from './card/Card'
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render(
  <Router>
    <App />
    <MyCard/>
  </Router>,
  document.getElementById('root')
);


