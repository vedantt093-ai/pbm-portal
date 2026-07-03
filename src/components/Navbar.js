import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div className="navbar">

      <div>
        <h3>🏥 Pharmacy Benefit Management Portal</h3>
      </div>

     <div className="navRight">

<div style={{position:"relative"}}>

🔔

<span
style={{
position:"absolute",
top:"-8px",
right:"-10px",
background:"red",
color:"white",
borderRadius:"50%",
padding:"2px 7px",
fontSize:"12px"
}}
>

4

</span>

</div>
        <span>
          {new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </span>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <span>Admin</span>

        </div>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            window.location.reload();
          }}
        >
          Logout
        </button>

        <Link to="/find-pharmacy">

Find Pharmacy

</Link>

<Link to="/track-claim">

Track Claim

</Link>


      </div>

    </div>
  );
}