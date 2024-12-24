import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ urlLogo, children }) => {
  return (
    <header>
      <div className="logo">
        <img src={urlLogo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cinemas">Cinema</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/add-movie">Add Movie</Link></li>
        </ul>
      </nav>
      {children}
    </header>
  );
};

export default Header;