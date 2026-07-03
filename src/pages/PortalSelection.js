import { Link } from "react-router-dom";
import "./PortalSelection.css";

export default function PortalSelection() {

  return (

    <div className="portalPage">

      <h1>PBM Healthcare Portal</h1>

      <p>

        Welcome! Please choose your portal to continue.

      </p>

      <div className="portalGrid">

        {/* Administrator */}

        <div className="portalCard">

          <div className="icon">👨‍💼</div>

          <h3>Administrator</h3>

          <p>

            Manage claims, users, reports,
            pharmacies and healthcare operations.

          </p>

          <Link
to="/login"
state={{role:"Administrator"}}
>

            <button>

              Continue

            </button>

          </Link>

        </div>

        {/* Member */}

        <div className="portalCard">

          <div className="icon">👤</div>

          <h3>Member</h3>

          <p>

            View benefits, search drugs,
            check claims and healthcare plans.

          </p>

          <Link to="/memberhome">

            <button>

              Continue

            </button>

          </Link>

        </div>

        {/* Pharmacy */}

        <div className="portalCard">

          <div className="icon">🏥</div>

          <h3>Pharmacy</h3>

          <p>

            Verify prescriptions,
            manage medicines and claims.

          </p>

          <Link to="/pharmacyhome">

            <button>

              Continue

            </button>

          </Link>

        </div>

        {/* Provider */}

        <div className="portalCard">

          <div className="icon">🩺</div>

          <h3>Healthcare Provider</h3>

          <p>

            Manage patients,
            eligibility and prior authorizations.

          </p>

          <Link to="/providerhome">

            <button>

              Continue

            </button>

          </Link>

        </div>

      </div>

    </div>

  );

}