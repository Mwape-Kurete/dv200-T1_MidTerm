//Importing Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//Importing Pages
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <Link to="/" class="nav-link active">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/Charts" class="nav-link">
          Link
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
