import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'

// import component
import Navbar from './Components/navbar/navbar'
import Footer from './Components/footer/footer'

// import layout
import Home from './layout/Home/Home'
import Blog from './layout/Blog/Blog'
import Profile from './layout/Profile/Profile'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/blog" exact>
            <Blog/>
        </Route>
        <Route path="/profile" exact>
            <Profile/>
        </Route>
        <Route>
          <Redirect to="/" />
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
      <Footer/>
    </Router>
    
  );
}

export default App;
