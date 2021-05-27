import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../projects.json";
import portfolio from "../../images/portfolio.png";
import "../ProjectsContainer/ProjectContainer.css"

function ProjectsContainer() {
    return (
      <>
       <img src={portfolio} id="portfolio" alt="text"/>
      <section className="container" id="containerTwo">
        <div className="row row-cols-1 row-cols-md-3"id="project-cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            picture={project.picture}
            title={project.title}
            deployedApp={project.deployedApp}
            github={project.github}
          />
        ))}
        </div>
        </section> 
      </>
    );
  }
  
  export default ProjectsContainer;
  