//Importing Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from "react-router-dom";

//Importing Pages
import "../Styles/Home.css";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="container-fluid homepage text-center">
      <div className="row navbar">
        <div className="col-12">
          <Navbar />
        </div>
      </div>

      <div className="pagecontents justify-content-center">
        <div className="row hero-section justify-content-center">
          <div className="col-12 justify-content-center">
            <h1>How We Doin'</h1>
            <p>
              The website that helps you follow Man United's statistics for the
              current season
            </p>
          </div>
        </div>
        <div className="row bottom-half">
          <div className="col-4 carousel-cont"></div>
          <div className="col copy-cont text-start">
            <h1>2023/2024</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              cumque necessitatibus neque omnis, aperiam perspiciatis
              temporibus! Perspiciatis laudantium cum, esse qui suscipit quidem
              placeat nam cupiditate maiores aut sapiente dicta? Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Velit enim doloribus
              cumque nostrum facilis quisquam beatae natus vel excepturi quos
              ratione maxime optio cupiditate maiores placeat repellendus,
              dolore impedit nam.
            </p>
            <span className="align-item-end">
              <button className="btn btn-dark">
                <Link to="/Charts">View Stats</Link>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
