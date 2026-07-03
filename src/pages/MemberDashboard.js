import { Link } from "react-router-dom";
import "./MemberDashboard.css";

export default function MemberDashboard() {

  return (

    <div className="memberDashboard">

      <aside className="memberSidebar">

        <h2>🏥 PBM</h2>

        <Link to="/memberdashboard">Dashboard</Link>

        <Link to="/myclaims">My Claims</Link>

        <Link to="/benefits">Benefits</Link>

        <Link to="/prescriptions">Prescriptions</Link>

        <Link to="/orders">Orders</Link>

        <Link to="/profile">Profile</Link>

      </aside>

      <div className="memberContent">

        <div className="memberTop">

          <h2>Welcome, John 👋</h2>

          <button>Logout</button>

        </div>

        <div className="memberCards">

          <div className="memberCard">

            <h3>Active Plan</h3>

            <h1>Gold Plus</h1>

          </div>

          <div className="memberCard">

            <h3>Total Claims</h3>

            <h1>18</h1>

          </div>

          <div className="memberCard">

            <h3>Approved</h3>

            <h1>16</h1>

          </div>

          <div className="memberCard">

            <h3>Coverage</h3>

            <h1>₹5,00,000</h1>

          </div>

        </div>

        <div className="recentClaims">

          <h3>Recent Claims</h3>

          <table className="table table-striped">

            <thead>

              <tr>

                <th>Claim ID</th>

                <th>Hospital</th>

                <th>Status</th>

                <th>Amount</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>CLM1001</td>

                <td>Apollo Hospital</td>

                <td>

                  <span className="badge bg-success">

                    Approved

                  </span>

                </td>

                <td>₹12,500</td>

              </tr>

              <tr>

                <td>CLM1002</td>

                <td>Ruby Hall</td>

                <td>

                  <span className="badge bg-warning">

                    Pending

                  </span>

                </td>

                <td>₹8,300</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}