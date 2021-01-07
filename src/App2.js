import React from "react";
import "./bootstrap.css";
import "./index.css";
import Particles from "react-particles-js";
import particlesConfig from "./configParticles";
import { NavBar2, Home, Projects, Pictures } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App2() {
  return (
    <div
      className="App"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute" }}>
        <Particles height="100%" width="100vw" params={particlesConfig} />
      </div>
      <Router>
        <NavBar2 />
        <Switch>
          <Route exact path="/personal1" component={Home} />
          <Route exact path="/personal1/Projects" component={Projects} />
          <Route path="/personal1/Pictures" component={Pictures} />
        </Switch>
      </Router>
    </div>
  );
}
