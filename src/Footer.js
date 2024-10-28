import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      {/* footer section */}
      <section id="footer-top-half">
        {/* footer top-half */}
        <p>An individual aspiring to get started in web development.</p>
        {/* footer short personal description */}
        <ul>
          {/* nav list */}
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
          {/* contact information container */}
          <p>Contact me:</p>
          <h3>mella.dao@yahoo.com</h3>
        </section>
      </section>

      <section id="footer-bottom-half">
        {/* footer bottom half */}
        <p>More links:</p>
        <ul>
          {/* list of additional social links */}
          <li>
            <a
              href="https://github.com/mellaDao"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1ERAX4EMo9KwEaY-VLpHWf-vKPZEdI7be/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Footer;
