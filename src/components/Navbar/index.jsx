import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <div className="navbar row space-between">
      <Link to="/">
        <img src="/icon.png" alt="luminary designs logo" className="logo" />
      </Link>
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <Link to="/" className="nav_link">Home</Link>
          </li>
          <li className="nav_item">
            <Link to="/about-us" className="nav_link">About</Link>
          </li>
          <li className="nav_item">
            <Link to="/projects" className="nav_link">Projects</Link>
          </li>
          <li className="nav_item">
            <Link to="/contact-us" className="nav_link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default index;
