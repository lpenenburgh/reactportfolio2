import React from "react";
import headshot from "../../images/headshot3.png";
import aboutme from "../../images/aboutme5.png";
import "./AboutMe.css";

function AboutMe() {
    return (
        <>
        <img src={headshot} id="headshot" alt="headshot"/>
        <img src= {aboutme} id="aboutme" alt="about me"/>
         <section className="container">
           <div className="row">
             <div className="col d-flex justify-content-center">
               <div className="card text-white bg-info mb-3">
                 <div className="card-body">
                   <p className="card-text">Welcome! My name is Lauren Penenburgh. I am an aspiring full stack web developer
                     originally from Northern Virginia. I moved to Colorado 4 years ago to be closer to the mountains, and
                     have been in Denver for the past 2. I currently manage a Pilates studio in the Denver but
                     after exploring coding for the first time, I was immediately hooked! I am currently enrolled in a full stack
                     web
                     development bootcamp at the University of Denver and hope to gain the skills to aquire a career in the
                     field. In my free time, I enjoy learning to code, skiing, hiking, and all types of crafting.
                     </p>
                 </div>
               </div>
             </div>
           </div>
           </section>
        </>


    )
}

export default AboutMe;