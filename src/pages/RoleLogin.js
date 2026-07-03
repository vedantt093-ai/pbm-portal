import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RoleLogin.css";

export default function RoleLogin({ defaultRole }){

const navigate=useNavigate();

const location=useLocation();

const role=location.state?.role || defaultRole || "Member";

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

const login=()=>{

if(role==="Administrator"){

navigate("/dashboard");

}

else if(role==="Member"){

navigate("/memberdashboard");

}

else if(role==="Pharmacy"){

navigate("/pharmacydashboard");

}

else{

navigate("/providerdashboard");

}

}

return(

<div className="loginPage">

<div className="loginCard">

<h2>{role} Login</h2>

<p>

Sign in to continue.

</p>

<input

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<button onClick={login}>

Login

</button>

</div>

</div>

)

}