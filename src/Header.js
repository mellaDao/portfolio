import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* navigation links */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Education">Education</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;