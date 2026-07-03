import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function Reporting() {

  const doughnutData = {
    labels: ["Approved", "Rejected", "Pending"],
    datasets: [
      {
        data: [430, 90, 35],
        backgroundColor: [
          "#28a745",
          "#dc3545",
          "#ffc107"
        ]
      }
    ]
  };

  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],

    datasets: [
      {
        label: "Claims",
        data: [120, 160, 140, 210, 180, 250],
        backgroundColor: "#0d6efd"
      }
    ]
  };

  return (

    <div>

      <h2>Reporting & Analytics</h2>

      <div className="cards">

        <div className="card1">
          <h3>Total Claims</h3>
          <h1>555</h1>
        </div>

        <div className="card1">
          <h3>Approved</h3>
          <h1>430</h1>
        </div>

        <div className="card1">
          <h3>Rejected</h3>
          <h1>90</h1>
        </div>

      </div>

      <div className="charts">

        <div className="chartBox">
          <h3>Claim Status</h3>
          <Doughnut data={doughnutData}/>
        </div>

        <div className="chartBox">
          <h3>Monthly Claims</h3>
          <Bar data={barData}/>
        </div>

      </div>

    </div>

  );

}