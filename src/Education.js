import React, { useEffect, useState } from "react";

function Education() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
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
    <section id="education-main-content">
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="algoma-background-picture">
            <div className="numbertext">1 / 2</div>
            <div className="education-text">
              <h2>Algoma University</h2>
              <p>
                In October 2024, I graduated with a Bachelor of Computer Science
                at Algoma university with a 88.1 Average.
              </p>
            </div>
            <div className="address">
              <p>1520 Queen St E, Sault Ste. Marie, ON P6A 2G4, Canada</p>
            </div>
            <div className="slideshow-arrows-container">
              <button className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </button>
              <button className="next" onClick={() => plusSlides(1)}>
                &#10095;
              </button>
            </div>
          </div>
        </div>

        <div className="mySlides fade">
          <div className="uta-background-picture">
            <div className="numbertext">2 / 2</div>
            <div className="education-text">
              <h2>University of Texas at Arlington</h2>
              <p>
                In December 2021, I obtained a Bachelor of Science in Biological
                Chemistry with a Minor in Biology. I graduated with a 3.5 GPA
                with a Presidential Scholarship.
              </p>
            </div>
            <div className="address">
              <p>701 S Nedderman Dr, Arlington, TX 76019, United States</p>
            </div>
            <div className="slideshow-arrows-container">
              <button className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </button>
              <button className="next" onClick={() => plusSlides(1)}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dots-container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
      </div>
    </section>
  );
}

export default Education;
