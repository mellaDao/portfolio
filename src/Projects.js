import React from "react";

function Projects() {
  return (
    <section className="projects-main-content">
      {/* main content of project page*/}
      <section id="project">
        {/* project card*/}
        <section id="project-image-container">
          {/* project card image*/}
          <img
            src={require("./images/yarnforge-cropped.png")}
            alt="YarnForge Website"
          />
        </section>
        <section id="project-text">
          {/* project card text */}
          <h3>4th Year Capstone Project | Jan. 2024 - May 2024</h3>
          <h2>Knitting Pattern Generator</h2>
          <p>
            Self-designed and implemented a website for generating and saving
            knitting patterns with a React frontend and Node/Express backend.
            Integrated a dynamic 3D model visualization of the garment using
            Three.js and Blender.
          </p>
          <ul>
            {/* project card's additional information as list */}
            <li>
              <p>Supervisor: Dr. Mahreen Nasir at Algoma University.</p>
            </li>
            <li>
              <p>
                Presentation at Algoma University, May 2024. (PowerPoint and
                Demo) 'YarnForge: A 3D-Enabled Platform for Personalized Sweater
                Design and Visualization'
              </p>
            </li>
          </ul>
        </section>
      </section>

      <section id="divider"></section>

      <section id="project">
        {/* project card*/}
        <section id="project-image-container">
          {/* project card image*/}
          <img
            src={require("./images/white-media-player-app.png")}
            alt="Media Player Desktop App"
          />
        </section>
        <section id="project-text">
          {/* project card text */}
          <h3>Software Engineering Course | Summer 2023</h3>
          <h2>Media Player Desktop App</h2>
          <p>
            Implemented a media player desktop app that reads and manages music
            files in Java and JavaFX.
          </p>
          <ul>
            {/* project card's additional information as list */}
            <li>
              <p>Designed an intuitive UI for easy navigation and control</p>
            </li>
            <li>
              <p>
                Developed unit tests for individual components and conducted
                integration tests
              </p>
            </li>
          </ul>
        </section>
      </section>

      <section id="divider"></section>

      {/* Simple header and paragraph about the website creator */}
      <section id="project">
        {/* project card*/}
        <section id="project-image-container">
          {/* project card image*/}
          <img
            src={require("./images/sio2-graphene.gif")}
            alt="SiOC Graphene Sheets"
          />
        </section>
        <section id="project-text">
          {/* project card text */}
          <h3>
            National Science Foundation-PIRE Research Program | Jan. 2020 – Aug.
            2021
          </h3>
          <h2>Study of Self-Diffusion within Silicon Oxycarbide</h2>
          <p>
            Individual study of self-diffusion of silicon and oxygen within
            amorphous ceramic silicon oxycarbide (SiCO) using LAMMPS to create
            3D models and simulate diffusion of oxygen in SiCO using molecular
            dynamic simulations.
          </p>
          <ul>
            {/* project card's additional information as list */}
            <li>
              <p>Supervisor: Dr. Peter Kroll at UTA.</p>
            </li>
            <li>
              <p>
                Presentation at virtual NSF-PIRE workshop on polymer derived
                ceramic SiCO. (PowerPoint)
              </p>
            </li>
            <li>
              <p>
                Presentation at Annual Celebration of Excellence by Students
                (ACES), UTA, Sept. 2020. (Poster) ‘Investigation of 2D-Diffusion
                in Silicon Oxycarbides (SiCO)’
              </p>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}

export default Projects;
