import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allowUser } from "./Service";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await allowUser(username, password);
      console.log(response);

      if (response.token) {
        localStorage.setItem("token", response.token);
        navigate("/");
      }
    } catch (err) {
      setError("Login failed. Please Enter A Correct Username or Password.");
    }
    console.log("Error", error);
  };

  return (
    <>
      <div className="login">
        <h2 className="active"> sign in </h2>
        <form>
          <input
            type="text"
            className="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>username</span>

          <br />

          <br />

          <input
            type="password"
            className="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>password</span>
          <br />
          <button className="signin" onClick={handleLogin}>
            Sign In
          </button>
          <hr />
        </form>
      </div>
    </>
  );
};

export default Login;

// username: "mor_2314",
//password: "83r5^_"
