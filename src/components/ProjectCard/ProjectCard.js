import React from "react";
import "../ProjectCard/ProjectCard.css"

function ProjectCard({ picture, title, deployedApp, github }) {
  return (
    <>
      <div className="col-md-4" id="card-column">
        <div className="card text-white bg-info h-100" id="project-card">
          <img
            src={picture}
            className="card-img-top"
            alt="Screenshot of website."
          />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <a className="nav-link" href={deployedApp} target="_blank" rel="noopener noreferrer">
              <h5>Deployed Application</h5>
            </a>
            <a className="nav-link" href={github} target="_blank" rel="noopener noreferrer">
              <h5>GitHub Repository</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;