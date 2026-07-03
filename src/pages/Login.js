import { useState } from "react";

export default function Login({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    if (username === "admin" && password === "admin123") {

      onLogin();

    } else {

      alert("Invalid Username or Password");

    }

  };

  return (

    <div className="loginPage">

      <div className="loginCard">

        <h2>PBM Portal Login</h2>

        <input
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={login}
        >
          Login
        </button>

      </div>

    </div>

  );
}