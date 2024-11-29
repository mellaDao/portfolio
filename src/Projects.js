import React, { useEffect, useState } from "react";
import { FadeInSection } from "./FadeInSection";
function Projects() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("myYarnForgeSlides");
      let dots = document.getElementsByClassName("dot-light");
      if (n > slides.length) {
        setSlideIndex(1);
      }
      if (n < 1) {
        setSlideIndex(slides.length);
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
      }
    }

    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex((prevSlideIndex) => prevSlideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <div className="projects-main-content">
      {/* main content of project page*/}
      <section id="yarnforge-title">
        <h1>YarnForge.</h1>
      </section>
      <section id="yarnforge-subtitle">
        <h2>
          A 3D-Enabled Platform for Personalized Sweater Design and
          Visualization
        </h2>
      </section>

      <div className="scroll-container-light">
        <p>
          <span className="transparent-text-light">Scroll</span>
        </p>
        <section id="yarnforge-caption-container">
          <section id="yarnforge-captions-left">
            <FadeInSection>
              <section id="yarnforge-caption1">
                <h3>
                  A website for generating and saving knitting patterns with a
                  React frontend and Node/Express backend. Integrated a dynamic
                  3D model visualization of the garment using Three.js and
                  Blender.
                </h3>
              </section>
            </FadeInSection>
          </section>
          <div className="vertical-line-light"></div>
          <FadeInSection>
            <section id="yarnforge-caption2">
              <h3>
                Use of an SQLite database to save user's account information
                securely, verify logins, and save knitting patterns. Integration
                of SendGrid for email delivery of password reset tokens.
              </h3>
            </section>
          </FadeInSection>
        </section>
      </div>

      <section id="yarnforge-preview-title">
        <h1>A Snapshot Preview of My Site</h1>
      </section>
      <section id="yarnforge-project-date">
        <span className="transparent-text-light">
          <h3>Jan. 2024 - May 2024</h3>
        </span>
      </section>
      <FadeInSection>
        <div className="yarnforge-slideshow-container">
          {/* project card image*/}
          <div className="myYarnForgeSlides fade">
            <div className="numbertext">1 / 4</div>
            <img src={require("./images/yarnforge1.png")} alt="profile" />
          </div>
          <div className="myYarnForgeSlides fade">
            <div className="numbertext">2 / 4</div>
            <img
              src={require("./images/yarnforge2.png")}
              alt="YarnForge Website"
            />
          </div>
          <div className="myYarnForgeSlides fade">
            <div className="numbertext">3 / 4</div>
            <img
              src={require("./images/yarnforge3.png")}
              alt="YarnForge Website"
            />
          </div>
          <div className="myYarnForgeSlides fade">
            <div className="numbertext">4 / 4</div>
            <img
              src={require("./images/yarnforge4.png")}
              alt="YarnForge Website"
            />
          </div>
          <div className="yarnforge-slideshow-arrows-container">
            <button className="prev" onClick={() => plusSlides(-1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => plusSlides(1)}>
              &#10095;
            </button>
          </div>
          <div className="dots-container-light">
            <span className="dot-light" onClick={() => currentSlide(1)}></span>
            <span className="dot-light" onClick={() => currentSlide(2)}></span>
            <span className="dot-light" onClick={() => currentSlide(3)}></span>
            <span className="dot-light" onClick={() => currentSlide(4)}></span>
          </div>
        </div>
      </FadeInSection>
      <section id="yarnforge-source-title">
        <h1>
          Source Code for YarnForge Available on my GitHub&nbsp;
          <a
            href="https://github.com/mellaDao/yarnforge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="secondary-text">Here</span>
          </a>
        </h1>
      </section>
      <section id="divider"></section>

      <section id="projects-main-content-light">
        <section id="other-projects-title">
          <h1>Other Projects</h1>
        </section>
        <FadeInSection>
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
                Implemented a media player desktop app that reads and manages
                music files in Java and JavaFX.
              </p>
              <br></br>
              <p>Designed an intuitive UI for easy navigation and control</p>
              <br></br>
              <p>
                Developed unit tests for individual components and conducted
                integration tests
              </p>
            </section>
          </section>
        </FadeInSection>

        <section id="divider"></section>

        <FadeInSection>
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
                National Science Foundation-PIRE Research Program | Jan. 2020 –
                Aug. 2021
              </h3>
              <h2>
                Data Analysis with LAMMPS to Study Self-Diffusion within SiCO
              </h2>
              <p>
                Worked with LAMMPS to code and run molecular dynamic simulations
                for research in self-diffusion of silicon and oxygen within
                silicon oxycarbide (SiCO).
              </p>
              <br></br>
              <p>
                Presentation at National Science Foundation-PIRE workshop on
                polymer derived ceramic SiCO. July, 2020. (PowerPoint)
              </p>
              <br></br>
              <p>
                Presentation at Annual Celebration of Excellence by Students
                (ACES), UTA, Sept. 2020. (Poster) ‘Investigation of 2D-Diffusion
                in Silicon Oxycarbides (SiCO)’
              </p>
            </section>
          </section>
        </FadeInSection>
      </section>
    </div>
  );
}

export default Projects;
