import { Link } from "react-router-dom";
import "./ProviderHome.css";

export default function ProviderHome() {

  return (

    <div>

      <nav className="providerNav">

        <h2>🩺 Provider Portal</h2>

        <div>

          <a href="#patients">Patients</a>

          <a href="#claims">Claims</a>

          <a href="#authorization">Authorization</a>

          <a href="#support">Support</a>

          <Link to="/providerlogin">

            <button>

              Provider Login

            </button>

          </Link>

        </div>

      </nav>

      <section className="providerHero">

        <h1>

          Healthcare Provider Portal

        </h1>

        <p>

          Manage patients, verify eligibility,
          submit claims and request prior authorizations.

        </p>

        <Link to="/providerlogin">

          <button>

            Continue

          </button>

        </Link>

      </section>

      <section className="providerCards">

        <div className="providerCard">

          👨‍⚕️

          <h3>Patients</h3>

          <p>

            Manage patient records.

          </p>

        </div>

        <div className="providerCard">

          📄

          <h3>Submit Claims</h3>

          <p>

            Submit medical claims.

          </p>

        </div>

        <div className="providerCard">

          ✔

          <h3>Eligibility</h3>

          <p>

            Verify insurance eligibility.

          </p>

        </div>

        <div className="providerCard">

          💊

          <h3>Prior Authorization</h3>

          <p>

            Request medication approval.

          </p>

        </div>

      </section>

    </div>

  );

}