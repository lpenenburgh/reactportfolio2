import React from "react";
import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer";
import NaviBar from "../../components/NavBar/NavBar";
import Moon from "../../components/Moon/Moon"
import Footer from "../../components/Footer/Footer"

function Portfolio() {
    return (
      <>
      <NaviBar />
      <ProjectsContainer />
      <Moon />
      <Footer />
      </>
    )
  }

  export default Portfolio;