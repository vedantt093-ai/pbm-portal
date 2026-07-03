import { Link } from "react-router-dom";
import "./PharmacyHome.css";

export default function PharmacyHome() {

  return (

    <div>

      <nav className="pharmacyNav">

        <h2>🏥 PBM Pharmacy Portal</h2>

        <div>

          <a href="#services">Services</a>

          <a href="#claims">Claims</a>

          <a href="#inventory">Inventory</a>

          <a href="#support">Support</a>

          <Link to="/pharmacylogin">

            <button>

              Pharmacy Login

            </button>

          </Link>

        </div>

      </nav>

      <section className="pharmacyHero">

        <h1>

          Connected Pharmacy Network

        </h1>

        <p>

          Verify prescriptions, process claims and
          manage medicine inventory securely.

        </p>

        <Link to="/pharmacylogin">

          <button>

            Continue

          </button>

        </Link>

      </section>

      <section className="pharmacyCards">

        <div className="pharmacyCard">

          💊

          <h3>Medicine Inventory</h3>

          <p>

            Track available medicines.

          </p>

        </div>

        <div className="pharmacyCard">

          📄

          <h3>Claim Verification</h3>

          <p>

            Verify healthcare claims.

          </p>

        </div>

        <div className="pharmacyCard">

          🚚

          <h3>Medicine Orders</h3>

          <p>

            View incoming medicine requests.

          </p>

        </div>

        <div className="pharmacyCard">

          📊

          <h3>Reports</h3>

          <p>

            Monthly pharmacy analytics.

          </p>

        </div>

      </section>

    </div>

  );

}