import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();

      if (res.ok) {
        // Store full user info
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/info");
      } else {
        alert(result.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div>
      <div className="border border-black p-10 absolute bottom-10 right-10">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-4"
        >
          <div>
            <label className="pr-2">Username:</label>
            <input
              type="text"
              className="border border-black px-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="pr-2">Password:</label>
            <input
              type="password"
              className="border border-black px-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="pt-4 flex justify-between w-full">
            <Link to="/register">Register</Link>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
