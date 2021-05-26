import logo from '../logo.svg';
import '../App.css';
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Awards from "./Awards"
import Education from "./Education"
import Experiences from "./Experiences"
import Projects from "./Projects"
import Dashboard from "./Dashboard"
import About from "./About"
import '../pageElements.css';

function App() {
  return (
      <div >
        <Router basename="/react-gh-pages"> 
            <Switch>
              <Route path = "/" exact component = { Dashboard } />
              <Route path = "/Education" component = { Education } />
              <Route path = "/Awards" component = { Awards } />
              <Route path = "/Projects" component = { Projects } />
              <Route path = "/About" component = { About } />
            </Switch>  
        </Router>
      </div>

 
  );
}

export default App;
