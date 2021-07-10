import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import { Home } from "./components/Pages/Home";
import { Alert } from "./components/layouts/Alert";
import { About } from "./components/Pages/About";
import { NotFound } from "./components/Pages/NotFound";
import SingleUser from "./components/Users/SingleUser";
import GithubState from "./Context/github/GithubState"; 
// import AlertState from "./Context/alert/AlertState";
import './App.css';

const App = () => { 
  return (
    <GithubState>   
      {/* <AlertState>  */}
      <Router>    
      <div className="App">
      <Navbar title="Github Finder" icon="fab fa-github" /> 
      <div className='container'>
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/about' component={About} />
          <Route path='/user/:login' component={SingleUser} />
          <Route component={NotFound} />
        </Switch>
      </div> 
    </div>
    </Router>
    {/* </AlertState> */}
    </GithubState>
  );
}

export default App;
