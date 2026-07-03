import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>

      {/* Navbar */}

      <nav className="homeNavbar">

        <h2>🏥 PBM Healthcare Portal</h2>

        <div>

          <Link to="/services">Services</Link>
          <a href="#plans">Plans</a>
          <Link to="/about">About</Link>
          <a href="#contact">Contact</a>

          <Link to="/portal">

            <button className="loginBtn">

              Portal Login

            </button>

          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="hero">

        <div>

          <h1>

            Modern Healthcare Benefits Management

          </h1>

          <p>

            Search claims, drug formulary, healthcare
            plans and manage pharmacy benefits with
            our secure PBM portal.

          </p>

          <Link to="/portal">

            <button className="startBtn">

              Get Started

            </button>

          </Link>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="statCard">

          <h2>8,500+</h2>

          <p>Members</p>

        </div>

        <div className="statCard">

          <h2>350+</h2>

          <p>Hospitals</p>

        </div>

        <div className="statCard">

          <h2>650+</h2>

          <p>Pharmacies</p>

        </div>

        <div className="statCard">

          <h2>99%</h2>

          <p>Claim Accuracy</p>

        </div>

      </section>

      {/* Services */}

      <section id="services" className="services">

        <h2>Our Services</h2>

        <div className="serviceGrid">

          <div className="serviceCard">

            💊

           <Link to="/drug-search">

Drug Formulary

</Link>
            <p>

              Search covered medicines instantly.

            </p>

          </div>

          <div className="serviceCard">

            📄

            <h4>Claims Processing</h4>

            <p>

              Submit and track healthcare claims.

            </p>

          </div>

          <div className="serviceCard">

            📊

            <h4>Analytics</h4>

            <p>

              Smart healthcare reporting dashboard.

            </p>

          </div>

          <div className="serviceCard">

            🤖

            <h4>AI Search</h4>

            <p>

              Intelligent claim and drug search.

            </p>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer>

        © 2026 PBM Healthcare Portal

      </footer>

<Footer />
    </div>
  );
}