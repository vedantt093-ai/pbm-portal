import { Link } from "react-router-dom";
import "./ProviderDashboard.css";

export default function ProviderDashboard() {

  return (

    <div className="providerDashboard">

      <aside className="providerSidebar">

        <h2>🩺 PBM</h2>

        <Link to="/providerdashboard">Dashboard</Link>

        <Link to="/providerhome">Portal Home</Link>

        <Link to="/find-pharmacy">Find Pharmacy</Link>

        <Link to="/track-claim">Track Claim</Link>

        <Link to="/drug-search">Drug Search</Link>

      </aside>

      <div className="providerContent">

        <div className="providerTop">

          <h2>Welcome, Dr. Mehta 👋</h2>

          <button>Logout</button>

        </div>

        <div className="providerCards">

          <div className="providerCard">

            <h3>Active Patients</h3>

            <h1>58</h1>

          </div>

          <div className="providerCard">

            <h3>Claims Submitted</h3>

            <h1>21</h1>

          </div>

          <div className="providerCard">

            <h3>Prior Authorizations</h3>

            <h1>6</h1>

          </div>

          <div className="providerCard">

            <h3>Eligibility Checks</h3>

            <h1>15</h1>

          </div>

        </div>

        <div className="recentPatients">

          <h3>Recent Patients</h3>

          <table className="table table-striped">

            <thead>

              <tr>

                <th>Patient ID</th>

                <th>Name</th>

                <th>Last Visit</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>PT3001</td>

                <td>Ramesh Iyer</td>

                <td>28 Jun 2026</td>

                <td>
                  <span className="badge bg-success">Active</span>
                </td>

              </tr>

              <tr>

                <td>PT3002</td>

                <td>Fatima Sheikh</td>

                <td>25 Jun 2026</td>

                <td>
                  <span className="badge bg-warning">Follow-up</span>
                </td>

              </tr>

              <tr>

                <td>PT3003</td>

                <td>Nikhil Gupta</td>

                <td>20 Jun 2026</td>

                <td>
                  <span className="badge bg-success">Active</span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}
