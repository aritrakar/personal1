import React from "react";
import "./App.css";
import "./bootstrap.css";
import "./index.css";
import { NavBar2, Home, Projects, Pictures } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar2 />
        <Switch>
          <Route exact path="/personal1" component={Home} />
          <Route exact path="/personal1/Projects" component={Projects} />
          <Route path="/personal1/Pictures" component={Pictures} />
        </Switch>
      </Router>
      <Router>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
