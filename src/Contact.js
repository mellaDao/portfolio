import React from "react";

function Contact() {
  return (
    <section className="contact-main-content">
      {/* main content of contact page */}
      <section id="contact-container">
        {/* email material icon */}
        <h2>
          <span class="material-icons">mail</span>
          Email <span class="secondary-text">mella.dao@yahoo.com</span>
          {/* email text */}
        </h2>
      </section>

      <section id="divider"></section>

      <section id="contact-container">
        {/* terminal material icon */}
        <h2>
          <span class="material-icons">terminal</span>
          {/* github text and link*/}
          <a
            href="https://github.com/mellaDao"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span class="secondary-text">@mellaDao</span>
          </a>
        </h2>
      </section>
    </section>
  );
}

export default Contact;
