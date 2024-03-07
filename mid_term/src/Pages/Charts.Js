//Importing Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//Importing Pages
import "../Styles/Charts.css";
import Navbar from "../Components/Navbar";

//importing chartjs

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, PolarArea, Scatter, Pie } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";

function Charts() {
  return (
    <div className="container-fluid homepage">
      <div className="row navbar">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="pagecontents charts-cont-large justify-content-center">
        <div className="row first">
          <div className="col-6 timeline-cont align-items-center">
            <div className="timeline">
              <Line
                data={{
                  labels: sourceData.map((data) => data.season),
                  datasets: [
                    {
                      label: "Wins",
                      data: sourceData.map((data) => data.wins),
                      borderRadius: 2.5,
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="col-4 barChart align-items-center">
            <Bar
              data={{
                labels: sourceData.map((data) => data.season),
                datasets: [
                  {
                    label: "total points",
                    data: sourceData.map((data) => data.total_points),
                    borderRadius: 2.5,
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="row second">
          <div className="col-4 pieChart-cont  align-items-center">
            <Doughnut
              data={{
                labels: sourceData.map((data) => data.season),
                datasets: [
                  {
                    label: "Red Cards",
                    data: sourceData.map((data) => data.red_cards),
                    borderRadius: 2.5,
                  },
                ],
              }}
            />
          </div>
          <div className="col chart-type4  align-items-center">
            <PolarArea
              data={{
                labels: sourceData.map((data) => data.season),
                datasets: [
                  {
                    label: "losses",
                    data: sourceData.map((data) => data.losses),
                    borderRadius: 2.5,
                  },
                ],
              }}
            />
          </div>
          <div className="col chart-type5 align-items-center">
            <Bar
              data={{
                labels: sourceData.map((data) => data.season),
                datasets: [
                  {
                    label: "Draws",
                    data: sourceData.map((data) => data.draws),
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
