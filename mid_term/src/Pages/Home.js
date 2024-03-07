//Importing Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//Importing Pages
import "../Styles/Home.css";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="container-fluid homepage">
      <div className="row navbar">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row hero-section">
        <div className="col-12">
          <h1>Hero section goes here</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h1>Carousel Goes Here</h1>
        </div>
        <div className="col">
          <h1>Copy with button goes here</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
