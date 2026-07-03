import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MemberLogin.css";

export default function MemberLogin() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login=()=>{

    if(email==="member@pbm.com" && password==="member123"){

      navigate("/memberdashboard");

    }else{

      alert("Invalid Email or Password");

    }

  }

  return(

<div className="loginContainer">

<div className="loginBox">

<h2>👤 Member Login</h2>

<p>

Login to access your healthcare benefits.

</p>

<input

type="email"

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

<br/>

<p>

Don't have an account?

</p>

<button className="registerBtn">

Register

</button>

</div>

</div>

)

}