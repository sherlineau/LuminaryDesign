import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <footer>
      <div className="footer row space-around">
        <div className="left">
          <Link to="/">
            <img src="/icon.png" alt="luminary designs logo" className="logo" />
          </Link>
          <p className="copyright">Luminary Designs &copy; 2024</p>
        </div>
        
        <div className="policies">
          <p className="heading">Terms & Policies</p>
          <Link to="/dmca-policy">DMCA Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/contact-us" className="contact">
          Contact Us
        </Link>
        </div>
      </div>
    </footer>
  );
};

export default index;
