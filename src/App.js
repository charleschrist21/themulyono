import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import component
import Navbar from './Components/navbar/navbar'

// import layout
import Home from './layout/Home/Home'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact="true">
            <Home/>
        </Route>
        <Route path="/das">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
