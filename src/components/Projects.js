import React from "react";
import ProjectItem from "./ProjectItem";
import Header from "./Header";

const local = require("../projects.json");

export default class Projects extends React.Component {
  render() {
    const projectArray = local.items.map((d) => (
      <ProjectItem
        key={d.id}
        side="right"
        heading={d.Name}
        text={d.Description}
        moreText={d.Used}
        evenMoreText={d.Demo}
        path={d.Github}
      />
    ));

    //console.log(projectArray);

    return (
      <div>
        <Header
          text="Projects"
          subText="Do. Or do not. There is no try."
          quote={true}
        />
        <div id="project-container">{projectArray}</div>
      </div>
    );
  }
}
