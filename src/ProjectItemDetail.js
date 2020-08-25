import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function ProjectItem(props) {
    return (
        <div id="projectItemWhole">
            <div className="">
                <div className="">
                    <h2 className=""><strong>{props.heading}</strong></h2>
                    <p className="lead">{props.text}</p>
                    <p className="lead">{props.moreText}</p>
                    <a href={props.path} target="_blank" rel="noopener noreferrer">See</a>
                </div>
            </div>

            <hr className="featurette-divider" />
        </div >
    )
}

export default ProjectItem;
