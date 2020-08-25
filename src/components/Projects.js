import React from "react";
import ProjectItem from "./ProjectItem";
import items from "../projectsData";
import Header from "./Header";

let projectArray = []

class Projects extends React.Component {
    constructor() {
        super()
        this.state = { data: items }
    }

    render() {
        projectArray = this.state.data.map(d =>
            <ProjectItem
                key={d.id}
                side="right"
                heading={d.Name}
                text={d.Description}
                moreText={d.Used}
                evenMoreText={d.Link}
                path={d.Path}
            />
        )

        console.log(projectArray)

        return (
            <div>
                <Header text="Projects" subText="Do. Or do not. There is no try." quote={true} />
                <div id="project-container">
                    {projectArray}
                </div>
            </div>

        )
    }

}

export default Projects;


