import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <section id="footer-top-half">
        <p>An individual aspiring to get started in web development.</p>

        <ul>
          <li>
            <h2>
              <Link to="/">Home</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/Projects">Projects</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/Education">Education</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/Contact">Contact</Link>
            </h2>
          </li>
        </ul>

        <section id="contact-me-container">
          <p>Contact me:</p>

          <h2>mella.dao@yahoo.com</h2>
        </section>
      </section>

      <section id="footer-bottom-half">
        <p>Find me on:</p>
        <ul>
          <li>
            <a
              href="https://github.com/mellaDao"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Footer;
