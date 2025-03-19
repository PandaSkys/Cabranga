import { supabase } from "../supabaseClient";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      setTimeout(() => {
        setError(false);
      }, 3000);
      console.log(error);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h1>Bon retour 👋</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember-me">
            <input
              type="checkbox"
              value={isCheck}
              id="rememberme"
              onChange={() => setIsCheck(!isCheck)}
            />
            <label htmlFor="rememberme" className="checkmark"></label>
            <label htmlFor="rememberme">Remember me</label>
          </div>
          <span>
            Forgot password? <NavLink to="/reset-password">Click here</NavLink>
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className={error ? "error active-error" : "error"}>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
