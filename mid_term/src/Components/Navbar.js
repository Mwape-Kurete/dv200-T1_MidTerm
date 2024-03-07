//Importing Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

//Importing Pages
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <Link to="/" class="nav-link current">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/Charts" class="nav-link">
          View Stats
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
