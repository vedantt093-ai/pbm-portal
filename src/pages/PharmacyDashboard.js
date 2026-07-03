import { Link } from "react-router-dom";
import "./PharmacyDashboard.css";

export default function PharmacyDashboard() {

  return (

    <div className="pharmacyDashboard">

      <aside className="pharmacySidebar">

        <h2>🏥 PBM</h2>

        <Link to="/pharmacydashboard">Dashboard</Link>

        <Link to="/pharmacyhome">Portal Home</Link>

        <Link to="/find-pharmacy">Find Pharmacy</Link>

        <Link to="/track-claim">Track Claim</Link>

        <Link to="/drug-search">Drug Search</Link>

      </aside>

      <div className="pharmacyContent">

        <div className="pharmacyTop">

          <h2>Welcome, Apollo Pharmacy 👋</h2>

          <button>Logout</button>

        </div>

        <div className="pharmacyCards">

          <div className="pharmacyCard">

            <h3>Pending Claims</h3>

            <h1>12</h1>

          </div>

          <div className="pharmacyCard">

            <h3>Verified Today</h3>

            <h1>34</h1>

          </div>

          <div className="pharmacyCard">

            <h3>Medicine Stock</h3>

            <h1>1,240</h1>

          </div>

          <div className="pharmacyCard">

            <h3>Active Orders</h3>

            <h1>9</h1>

          </div>

        </div>

        <div className="recentOrders">

          <h3>Recent Medicine Orders</h3>

          <table className="table table-striped">

            <thead>

              <tr>

                <th>Order ID</th>

                <th>Medicine</th>

                <th>Quantity</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>ORD2001</td>

                <td>Paracetamol 500mg</td>

                <td>200</td>

                <td>
                  <span className="badge bg-success">Delivered</span>
                </td>

              </tr>

              <tr>

                <td>ORD2002</td>

                <td>Amoxicillin 250mg</td>

                <td>120</td>

                <td>
                  <span className="badge bg-warning">Pending</span>
                </td>

              </tr>

              <tr>

                <td>ORD2003</td>

                <td>Metformin 500mg</td>

                <td>300</td>

                <td>
                  <span className="badge bg-success">Delivered</span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}
