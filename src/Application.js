import React from "react";
import "./App.css";
import "./bootstrap.css";
import "./index.css";
import NavBar2 from "./components/NavBar2";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Pictures from "./components/Pictures";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Application() {
  return (
    <div className="App">
      <Router>
        <NavBar2 />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          {/*<Route path="/Projects:id" component={ProjectItem} /> */}
          <Route path="/Pictures" component={Pictures} />
        </Switch>
      </Router>
      <Router>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default Application;
