import "./About.css";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="aboutPage">

      <section className="aboutHero">

        <h1>About PBM Healthcare Portal</h1>

        <p>
          We simplify healthcare benefit management by connecting
          members, pharmacies, healthcare providers and administrators
          on one secure platform.
        </p>

      </section>

      <section className="aboutContainer">

        <div className="aboutCard">

          <h2>🏥 Our Mission</h2>

          <p>
            To provide a secure, transparent and efficient
            Pharmacy Benefit Management system that improves
            healthcare accessibility.
          </p>

        </div>

        <div className="aboutCard">

          <h2>🎯 Our Vision</h2>

          <p>
            To become the leading digital healthcare benefit
            management platform by offering modern technology
            and quality healthcare services.
          </p>

        </div>

        <div className="aboutCard">

          <h2>💡 Why Choose Us?</h2>

          <ul>

            <li>✔ Secure Healthcare Records</li>

            <li>✔ Fast Claim Processing</li>

            <li>✔ Smart Drug Formulary Search</li>

            <li>✔ Nationwide Pharmacy Network</li>

            <li>✔ 24×7 Customer Support</li>

          </ul>

        </div>

      </section>

      <section className="teamSection">

        <h2>Meet Our Team</h2>

        <div className="teamGrid">

          <div className="teamCard">

            <h3>Project Manager</h3>

            <p>PBM Administration</p>

          </div>

          <div className="teamCard">

            <h3>Healthcare Team</h3>

            <p>Claims & Pharmacy</p>

          </div>

          <div className="teamCard">

            <h3>Support Team</h3>

            <p>Customer Assistance</p>

          </div>

        </div>

      </section>


<Footer />


    </div>
  );
}