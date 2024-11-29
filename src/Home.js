import React from "react";
import { FadeInSection } from "./FadeInSection";

function Home() {
  return (
    <div className="home-main-content">
      {/* home page */}{" "}
      <FadeInSection>
        <div className="profile-intro-container">
          <section id="profile-intro-picture-container">
            {/* profile introduction container for profile picture*/}
            <img src={require("./images/mella-cropped.jpg")} alt="profile" />
          </section>
          {/* profile introduction container */}
          <section id="profile-intro-text-container">
            {/* profile introduction container for text*/}
            <h1>
              <span className="transparent-text">Hi, my</span>
              <br></br>
              <span className="transparent-text">name is</span>{" "}
              <span className="black-text">Mella</span>
            </h1>

            <h2>
              <i>Dual-Degree in Computer Science and Biological Chemistry.</i>
            </h2>
          </section>
        </div>
      </FadeInSection>
      <div className="scroll-container">
        <p>
          <span className="transparent-text">Scroll</span>
        </p>
        <section id="caption-container">
          <FadeInSection>
            <section id="caption1">
              <h3>
                I lived in the states for the majority of my life where I
                studied biochemistry and worked in computational chemistry.
              </h3>
              <img
                src={require("./images/american-flag.png")}
                alt="American Flag"
              />
              <p>
                <span className="transparent-text">
                  Photo Source: showallegiance.com
                </span>
              </p>
            </section>
          </FadeInSection>
          <div className="vertical-line"></div>
          <FadeInSection>
            <section id="caption2">
              <h3>
                I moved to Canada to be with my husband and went back to school
                for computer science because I loved working with computers.
              </h3>
              <img
                src={require("./images/canadian_flag.jpg")}
                alt="Canadian Flag"
              />
              <p>
                <span className="transparent-text">
                  Photo Source: Standards Council of Canada
                </span>
              </p>
            </section>
          </FadeInSection>
        </section>
      </div>
      <section id="picture-divider">{/* image divider*/}</section>
      <section id="about-me-title">
        <h1>A little bit more about me</h1>
      </section>
      <div className="about-me-container">
        {/* about me section container*/}
        <FadeInSection>
          <section id="about-me-card">
            {/* about me individual card container*/}
            <div className="about-picture-container">
              {/* about me image container*/}
              <img
                src={require("./images/algoma-winter-cropped.png")}
                alt="BCOSC card"
              />
            </div>
            {/* about me text*/}
            <h2>Bachelor of Computer Science</h2>
            <p>
              I studied computer science at Algoma University and graduated in
              October 2024.
            </p>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="about-me-card">
            {/* about me individual card container*/}
            <div className="about-picture-container">
              {/* about me image container*/}
              <img
                src={require("./images/sioc-fractal.png")}
                alt="Comp chem card"
              />
            </div>
            {/* about me text*/}
            <h2>Computational Chemistry</h2>
            <p>
              I've previously worked in computational chemistry as an
              undergraduate researcher at UTA where I wrote scripts with LAMMPS
              code to run molecular dynamic simulations.
            </p>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="about-me-card">
            {/* about me individual card container*/}
            <div className="about-picture-container">
              {/* about me image container*/}
              <img src={require("./images/yarn.jpg")} alt="Fiber artist card" />
            </div>
            {/* about me text*/}
            <h2>Fiber artist</h2>
            <p>
              I'm also an avid knitter and crocheter! I love making warm
              sweaters for the long winters and small amigurumi softies for
              gifts.
            </p>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}

export default Home;
