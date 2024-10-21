import React from "react";

function Home() {
  return (
    <section className="home-main-content">
      <div className="profile-container">
        <section id="profile-text-container">
          <h1>Mella Dao</h1>
          <h2>Computer Science Graduate from Algoma University</h2>
          <h3>
            Hello! I graduated with a Bachelor of Computer Science from Algoma
            University and am looking for a job in web development. I've
            previously worked in computational chemistry as an undergraduate
            researcher in the NSF-PIRE program and UTA where I learned to code
            with LAMMPS to run molecular dynamic simulations.
          </h3>

          <h3>
            I'm also able to relocate to work anywhere in Canada and I'm
            available for remote work in the United States.
          </h3>
        </section>

        <section id="profile-picture-container">
          <img src={require("./images/mella-cropped.jpg")} alt="profile" />
        </section>
      </div>

      <div className="background-picture"></div>

      <div className="about-me-container">
        <section id="about-box-container">
          <section id="about-picture-container">
            <img
              src={require("./images/algoma-winter-cropped.png")}
              alt="BCOSC card"
            />
          </section>
          <h2>Bachelor of Computer Science</h2>
          <p>
            I studied computer science at Algoma University and graduated in
            October 2024.
          </p>
        </section>

        <section id="about-box-container">
          <section id="about-picture-container">
            <img
              src={require("./images/sioc-fractal.png")}
              alt="Comp chem card"
            />
          </section>
          <h2>Experience in Computational Chemistry</h2>
          <p>
            I've previously worked in computational chemistry as an
            undergraduate researcher at UTA where I learned to code with LAMMPS
            to run molecular dynamic simulations.
          </p>
        </section>

        <section id="about-box-container">
          <section id="about-picture-container">
            <img
              src={require("./images/profile-picture.jpg")}
              alt="Fiber artist card"
            />
          </section>

          <h2>Fiber artist</h2>
          <p>
            I'm also an avid knitter and crocheter! I love making warm sweaters
            for the long winters and small amigurumi softies for gifts.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Home;
