import { Link } from "react-router-dom";
import "./MemberHome.css";

export default function MemberHome(){

return(

<div>

<nav className="memberNav">

<h2>🏥 PBM Member Portal</h2>

<div>

<a href="#benefits">Benefits</a>

<a href="#claims">Claims</a>

<a href="#plans">Plans</a>

<a href="#support">Support</a>

<Link to="/memberlogin">

<button>

Login

</button>

</Link>

</div>

</nav>

<section className="memberHero">

<h1>

Healthcare Benefits Made Simple

</h1>

<p>

View your healthcare plans, claims,
drug formulary and prescriptions.

</p>

<Link to="/memberlogin">

<button className="heroBtn">

Member Login

</button>

</Link>

</section>

<section className="memberCards">

<div className="memberCard">

💊

<h3>Drug Formulary</h3>

<p>

Search covered medicines.

</p>

</div>

<div className="memberCard">

📄

<h3>Claims</h3>

<p>

Track submitted claims.

</p>

</div>

<div className="memberCard">

🏥

<h3>Benefits</h3>

<p>

View your health benefits.

</p>

</div>

<div className="memberCard">

📞

<h3>Support</h3>

<p>

Contact our support team.

</p>

</div>

</section>

<footer>

© 2026 PBM Healthcare

</footer>

</div>

)

}