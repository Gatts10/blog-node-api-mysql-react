import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/auth/register`,
        inputs
      );
      navigate("/login");
      console.log(res.data);
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Don you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
