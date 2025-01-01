import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* header section */}
      <nav>
        {/* navigation links */}
        <ul>
          <li>
            <Link to="/">Data Projects</Link>
          </li>
          <li>
            <Link to="/OtherProjects">Other Projects</Link>
          </li>
          <li>
            <Link to="/Education">Education</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1dXeei2brM__AHs0BUfKffcJKcqBpMaeu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
