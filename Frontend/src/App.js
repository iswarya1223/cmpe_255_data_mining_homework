// import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import Barchartcomp from './components/Barchartcomp'
import Linechartcomp from './components/Linechartcomp';
import Piechartcomp from './components/Piechartcomp';
import Barchart1comp from './components/Barchart1comp';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
 
    <Router>
          <Barchartcomp />
          <Linechartcomp/>
          <Piechartcomp/>
          <Barchart1comp/>
    </Router>
    );
}

export default App;
