import React, { useEffect, useState } from "react";
import { FadeInSection } from "./FadeInSection";
import Misc from "./Misc";

function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [yarnforgeSlideIndex, setYarnforgeSlideIndex] = useState(1);
  const [tableauSlideIndex, setTableauSlideIndex] = useState(1);

  useEffect(() => {
    function showTableauSlides(n) {
      let i;
      let tableauSlides = document.getElementsByClassName("myTableauSlides");
      let dots = document.getElementsByClassName("dot1");
      if (n > tableauSlides.length) {
        setTableauSlideIndex(1);
      }
      if (n < 1) {
        setTableauSlideIndex(tableauSlides.length);
      }
      for (i = 0; i < tableauSlides.length; i++) {
        tableauSlides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      if (tableauSlides[tableauSlideIndex - 1]) {
        tableauSlides[tableauSlideIndex - 1].style.display = "block";
      }
      if (dots[tableauSlideIndex - 1]) {
        dots[tableauSlideIndex - 1].className += " active";
      }
    }

    function showYarnforgeSlides(n) {
      let i;
      let yarnforgeSlides =
        document.getElementsByClassName("myYarnForgeSlides");
      let dots = document.getElementsByClassName("dot2");
      if (n > yarnforgeSlides.length) {
        setYarnforgeSlideIndex(1);
      }
      if (n < 1) {
        setYarnforgeSlideIndex(yarnforgeSlides.length);
      }
      for (i = 0; i < yarnforgeSlides.length; i++) {
        yarnforgeSlides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      if (yarnforgeSlides[yarnforgeSlideIndex - 1]) {
        yarnforgeSlides[yarnforgeSlideIndex - 1].style.display = "block";
      }
      if (dots[yarnforgeSlideIndex - 1]) {
        dots[yarnforgeSlideIndex - 1].className += " active";
      }
    }
    showTableauSlides(tableauSlideIndex);
    showYarnforgeSlides(yarnforgeSlideIndex);
  }, [yarnforgeSlideIndex, tableauSlideIndex]);

  function currentYarnforgeSlide(n) {
    setYarnforgeSlideIndex(n);
  }

  function currentTableauSlide(n) {
    setTableauSlideIndex(n);
  }

  function plusTableauSlides(n) {
    setTableauSlideIndex((prevSlideIndex) => prevSlideIndex + n);
  }

  function plusYarnforgeSlides(n) {
    setYarnforgeSlideIndex((prevSlideIndex) => prevSlideIndex + n);
  }

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
              <img
                src={require("./images/toronto.png")}
                alt="toronto airbnb project"
              />
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
                    alt="credit card fraud project"
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
                <button className="view-project-button">View Project</button>
              </a>
            </section>

            <section className="post">
              <section className="post-header">
                <h2>Ravelry Web Scraper with Python </h2>
              </section>
              <div className="image-post">
                <img
                  src={require("./images/ravelry.jpg")}
                  alt="ravelry web scraper project"
                />
              </div>
              <section className="post-description">
                <p>
                  <span className="transparent-text">
                    Web scraping project that summarizes Ravelry.com reviews and
                    overall sentiment on a knitting pattern.
                  </span>
                </p>
              </section>
              <button className="view-project-button">In progress</button>
            </section>
            <section className="post">
              <section className="post-header">
                <h2>Tableau Dashboard</h2>
              </section>

              <div className="image-post">
                {/* project card image*/}
                <div className="myTableauSlides fade">
                  <button
                    className="image-button"
                    onClick={() => plusTableauSlides(1)}
                    aria-label="Next Tableau Slide"
                  >
                    <img
                      src={require("./images/tableau.jpg")}
                      alt="Tableau page 1"
                    />
                  </button>
                </div>
                <div className="myTableauSlides fade">
                  <button
                    className="image-button"
                    onClick={() => plusTableauSlides(1)}
                    aria-label="Next Tableau Slide"
                  >
                    <img
                      src={require("./images/tableau1.png")}
                      alt="Tableau page 2"
                      style={{ cursor: "pointer" }}
                    />
                  </button>
                </div>
                <div className="myTableauSlides fade">
                  <button
                    className="image-button"
                    onClick={() => plusTableauSlides(1)}
                    aria-label="Next Tableau Slide"
                  >
                    <img
                      src={require("./images/tableau2.png")}
                      alt="Tableau page 3"
                    />
                  </button>
                </div>
                <div className="dots-container-small">
                  <span
                    className="dot1"
                    onClick={() => currentTableauSlide(1)}
                  ></span>
                  <span
                    className="dot1"
                    onClick={() => currentTableauSlide(2)}
                  ></span>
                  <span
                    className="dot1"
                    onClick={() => currentTableauSlide(3)}
                  ></span>
                </div>
              </div>

              <section className="post-description">
                <p>
                  <span className="transparent-text">
                    Tableau Dashboards for projects
                  </span>
                </p>
              </section>
              <a
                href="https://public.tableau.com/app/profile/mella.ly.dao/vizzes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-project-button">View Project</button>
              </a>
            </section>

            <section className="post">
              <section className="post-header">
                <h2>Yarnforge Pattern Generator</h2>
              </section>
              <div className="image-post">
                {/* project card image*/}
                <div className="myYarnForgeSlides fade">
                  <button
                    className="image-button"
                    onClick={() => plusYarnforgeSlides(1)}
                    aria-label="Next YarnForge Slide"
                  >
                    <img
                      src={require("./images/yarnforge1.png")}
                      alt="YarnForge Website Page 1"
                    />
                  </button>
                </div>
                <div className="myYarnForgeSlides fade">
                  <button
                    className="image-button"
                    onClick={() => plusYarnforgeSlides(1)}
                    aria-label="Next YarnForge Slide"
                  >
                    <img
                      src={require("./images/yarnforge2.png")}
                      alt="YarnForge Website Page 2"
                    />
                  </button>
                </div>
                <div className="myYarnForgeSlides fade">
                  <button
                    className="image-button"
                    onClick={() => plusYarnforgeSlides(1)}
                    aria-label="Next YarnForge Slide"
                  >
                    <img
                      src={require("./images/yarnforge3.png")}
                      alt="YarnForge Website Page 3"
                    />
                  </button>
                </div>
                <div className="myYarnForgeSlides fade">
                  <button
                    className="image-button"
                    onClick={() => plusYarnforgeSlides(1)}
                    aria-label="Next YarnForge Slide"
                  >
                    <img
                      src={require("./images/yarnforge4.png")}
                      alt="YarnForge Website Page 4"
                    />
                  </button>
                </div>
                <div className="dots-container-small">
                  <span
                    className="dot2"
                    onClick={() => currentYarnforgeSlide(1)}
                  ></span>
                  <span
                    className="dot2"
                    onClick={() => currentYarnforgeSlide(2)}
                  ></span>
                  <span
                    className="dot2"
                    onClick={() => currentYarnforgeSlide(3)}
                  ></span>
                  <span
                    className="dot2"
                    onClick={() => currentYarnforgeSlide(4)}
                  ></span>
                </div>
              </div>
              <section className="post-description">
                <p>
                  <span className="transparent-text">
                    React web app with a Node/Express.js backend that generates
                    and saves knitting patterns to an SQLite db.
                  </span>
                </p>
              </section>
              <a
                href="https://github.com/mellaDao/PortfolioProjects/blob/main/Nashville-Project3/nashville.sql"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-project-button">View Project</button>
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
                  <img
                    src={require("./images/movies.png")}
                    alt="Movie correlation project"
                  />
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
                <button className="view-project-button">View Project</button>
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
                    alt="nashville project"
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
                <button className="view-project-button">View Project</button>
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
                  <img
                    src={require("./images/covid.jpg")}
                    alt="covid project"
                  />
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
                <button className="view-project-button">View Project</button>
              </a>
            </section>
          </div>
        </div>
      </FadeInSection>
      {/*
      <Misc />
      */}
    </div>
  );
}

export default Home;
