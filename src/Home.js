import React, { useState } from "react";
import { FadeInSection } from "./FadeInSection";

function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const openPostTab = (tabIndex) => {
    setActiveTabIndex(tabIndex);
  };

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
        <div className="vertical-line"></div>
      </div>
      <FadeInSection>
        <div class="post-container-featured">
          <section className="post-header-featured">
            <h2>Data Cleaning with Python</h2>
            <p>
              <span className="transparent-text">
                In this project, we take raw Airbnb data for Toronto in November
                and December
                <br />
                and transform it with Python to make it more usable for
                visualization in Tableau.
              </span>
            </p>
          </section>
          <a
            href="https://github.com/mellaDao/PortfolioProjects/blob/main/TorontoAirbnbs-Project6/airbnbs.ipynb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-post-featured">
              <img src={require("./images/toronto.png")} alt="BCOSC card" />
            </div>
          </a>
          <a
            href="https://github.com/mellaDao/PortfolioProjects/blob/main/TorontoAirbnbs-Project6/airbnbs.ipynb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="post-border-container">
          <div className="post-tabs">
            <button
              class="post-tablinks default-tab active"
              onClick={() => openPostTab(0)}
              style={{
                backgroundColor: activeTabIndex === 0 ? "white" : "transparent",
                color: activeTabIndex === 0 ? "black" : "white",
              }}
            >
              Page 1
            </button>
            <button
              className="post-tablinks"
              onClick={() => openPostTab(1)}
              style={{
                backgroundColor: activeTabIndex === 1 ? "white" : "transparent",
                color: activeTabIndex === 1 ? "black" : "white",
              }}
            >
              Page 2
            </button>
          </div>
          <div
            id="post-container-page1"
            style={{
              display: activeTabIndex === 0 ? "" : "none",
            }}
          >
            <section className="post">
              <section className="post-header">
                <h2>Credit Card Fraud Detection</h2>
              </section>
              <a
                href="https://github.com/mellaDao/CreditCardFraud/blob/main/creditcard.ipynb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-post">
                  <img
                    src={require("./images/creditcard.jpg")}
                    alt="BCOSC card"
                  />
                </div>
              </a>
              <section className="post-description">
                <p>
                  <span className="transparent-text">
                    Credit card fraud detection using kNN algorithm, achieving
                    improved classification accuracy with SMOTE.
                  </span>
                </p>
              </section>
              <a
                href="https://github.com/mellaDao/CreditCardFraud/blob/main/creditcard.ipynb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Project</button>
              </a>
            </section>

            <section className="post">
              <section className="post-header">
                <h2>Covid 19 Data Exploration</h2>
              </section>
              <a
                href="https://github.com/mellaDao/PortfolioProjects/blob/main/Covid-Project1/covid.sql"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-post">
                  <img src={require("./images/covid.jpg")} alt="BCOSC card" />
                </div>
              </a>
              <section className="post-description">
                <p>
                  <span className="transparent-text">
                    Exploring global COVID-19 data with SQL Server: infection,
                    death rates, and vaccination progress.
                  </span>
                </p>
              </section>
              <a
                href="https://github.com/mellaDao/PortfolioProjects/blob/main/Covid-Project1/covid.sql"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Project</button>
              </a>
            </section>
            <section className="post">
              <section className="post-header">
                <h2>Tableau Dashboard</h2>
              </section>
              <a
                href="https://public.tableau.com/app/profile/mella.ly.dao/vizzes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-post">
                  <img src={require("./images/tableau.jpg")} alt="BCOSC card" />
                </div>
              </a>
              <section className="post-description">
                <p>
                  <span className="transparent-text">
                    Tableau Dashboards for projects on COVID 19 and Toronto
                    Airbnbs
                  </span>
                </p>
              </section>
              <a
                href="https://public.tableau.com/app/profile/mella.ly.dao/vizzes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Project</button>
              </a>
            </section>

            <section className="post">
              <section className="post-header">
                <h2>Nashville Housing</h2>
              </section>
              <a
                href="https://github.com/mellaDao/PortfolioProjects/blob/main/Nashville-Project3/nashville.sql"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-post">
                  <img
                    src={require("./images/nashville1.jpg")}
                    alt="BCOSC card"
                  />
                </div>
              </a>
              <section className="post-description">
                <p>
                  <span className="transparent-text">
                    Transforming raw housing data in SQL Server to make it more
                    usable for analysis
                  </span>
                </p>
              </section>
              <a
                href="https://github.com/mellaDao/PortfolioProjects/blob/main/Nashville-Project3/nashville.sql"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Project</button>
              </a>
            </section>
          </div>

          <div
            id="post-container-page2"
            style={{
              display: activeTabIndex === 1 ? "" : "none",
            }}
          >
            <section className="post">
              <section className="post-header">
                <h2>Movie Correlation with Python</h2>
              </section>
              <a
                href="https://github.com/mellaDao/PortfolioProjects/blob/main/Movies-Project4/movies.ipynb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-post">
                  <img src={require("./images/movies.png")} alt="BCOSC card" />
                </div>
              </a>
              <section className="post-description">
                <p>
                  <span className="transparent-text">
                    In this project, we look at what variables effect the gross
                    revenue from movies
                  </span>
                </p>
              </section>
              <a
                href="https://github.com/mellaDao/PortfolioProjects/blob/main/Movies-Project4/movies.ipynb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Project</button>
              </a>
            </section>
          </div>
        </div>
      </FadeInSection>
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
