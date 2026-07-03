import { useState } from "react";
import "./Register.css";

export default function Register() {

const [role,setRole]=useState("Member");

return(

<div className="registerContainer">

<div className="registerCard">

<h2>Create Account</h2>

<p>Select your account type</p>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option>Member</option>

<option>Pharmacy</option>

<option>Provider</option>

</select>

<input
type="text"
placeholder="Full Name"
/>

{
role==="Pharmacy" &&

<input
type="text"
placeholder="Pharmacy Name"
/>

}

{
role==="Provider" &&

<input
type="text"
placeholder="Hospital / Clinic Name"
/>

}

<input
type="email"
placeholder="Email"
/>

<input
type="tel"
placeholder="Mobile Number"
/>

<input
type="password"
placeholder="Password"
/>

<input
type="password"
placeholder="Confirm Password"
/>

<button>

Create Account

</button>

</div>

</div>

)

}