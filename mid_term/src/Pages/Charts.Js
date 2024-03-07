//Importing Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//Importing Pages
import "../Styles/Home.css";
import Navbar from "../Components/Navbar";

function Charts() {
  return (
    <div className="container-fluid homepage">
      <div className="row navbar">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-7 timeline-cont">
          <h1>Timeline</h1>
        </div>
        <div className="col barChart-cont1">
          <h1>Bar Chart</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-5 pieChart-cont">
          <h1>Pie Chart</h1>
        </div>
        <div className="col chart-type4">
          <h1>Another typee of chart</h1>
        </div>
        <div className="col chart-type5">
          <h1>Another typee of chart</h1>
        </div>
      </div>
    </div>
  );
}

export default Charts;
