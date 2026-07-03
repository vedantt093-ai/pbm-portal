import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footerContainer">

        <div className="footerSection">

          <h2>🏥 PBM Healthcare</h2>

          <p>

            PBM Healthcare Portal helps members,
            pharmacies, providers and administrators
            manage healthcare benefits efficiently.

          </p>

        </div>

        <div className="footerSection">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/services">Services</Link>

          <Link to="/drug-search">Drug Search</Link>

          <Link to="/find-pharmacy">Find Pharmacy</Link>

        </div>

        <div className="footerSection">

          <h3>Support</h3>

          <p>📞 +91 9876543210</p>

          <p>📧 support@pbmhealthcare.com</p>

          <p>🕒 Mon - Sat : 9 AM - 6 PM</p>

        </div>

        <div className="footerSection">

          <h3>Follow Us</h3>

          <p>🌐 Facebook</p>

          <p>📷 Instagram</p>

          <p>💼 LinkedIn</p>

          <p>▶ YouTube</p>

        </div>

      </div>

      <div className="footerBottom">

        © 2026 PBM Healthcare Portal | All Rights Reserved

      </div>

    </footer>

  );

}