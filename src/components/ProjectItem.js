import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            style={{ marginRight: 20 }}
            href={props.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {props.evenMoreText.length > 0 ? (
            <a
              href={props.evenMoreText}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          ) : (
            ""
          )}
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
}

export default ProjectItem;
