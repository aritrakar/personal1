import React from "react";
import "./bootstrap.css";
import "./index.css";
import { NavBar2, Home, Projects, Pictures } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
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
