import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Sidebar/>
    </div>
    </Router>
  );
}

export default App;
