import React from "react";
import { FadeInSection } from "./FadeInSection";
const Misc = () => {
  return (
    <div>
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
};

export default Misc;
