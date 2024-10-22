import React from "react";

function Contact() {
  return (
    <section className="contact-main-content">
      {/* main content of contact page */}
      <section id="contact-container">
        {/* container for individual contact card */}
        <span class="material-icons">mail</span>
        {/* email material icon */}
        <h2>
          Email <span class="secondary-text">mella.dao@yahoo.com</span>
          {/* email text */}
        </h2>
      </section>

      <section id="divider"></section>

      <section id="contact-container">
        {/* container for individual contact card */}
        <span class="material-icons">terminal</span>
        {/* terminal material icon */}
        <h2>
          {/* github text and link*/}
          <a
            href="https://github.com"
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
