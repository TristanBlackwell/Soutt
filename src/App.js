import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/navbar";
import Home from "./components/home";
import Work from "./components/work";


AOS.init();

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/work">
            <Work />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
