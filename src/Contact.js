import React from "react";

function Contact() {
  return (
    <section className="contact-main-content">
      <section id="social-container">
        <span class="material-icons">mail</span>
        <h2>
          Email <span class="secondary-text">mella.dao@yahoo.com</span>
        </h2>
      </section>

      <section id="divider"></section>

      <section id="social-container">
        <span class="material-icons">terminal</span>
        <h2>
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
