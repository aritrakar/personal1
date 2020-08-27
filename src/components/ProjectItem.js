import React from "react";
import "../index.css";
//import { Link } from "react-router-dom";

function ProjectItem(props) {
  return (
    <div id="projectItemWhole">
      <div className="">
        {" "}
        {/*row featurette*/}
        <div className="">
          {" "}
          {/* must add up to 12. 9+3=12 cold-md-9*/}
          <h2 className="">
            <strong>{props.heading}</strong>
          </h2>
          <p className="lead">{props.text}</p>
          <p className="lead">{props.moreText}</p>
          <a
            href={props.evenMoreText}
            target="_blank"
            rel="noopener noreferrer"
          >
            See
          </a>
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
}

export default ProjectItem;
