import { supabase } from "../supabaseClient";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    const { data, error } = await supabase.auth.signUp({
        email: 'alice.dupont@exemple.com',
        password: 'alice123',
        options: {
          data: {
            first_name: 'Alice',
            yearOfStudy: 2,
          },
        },
      })
    if (error) {
      setError(error.message);
      console.log(error)
    } else {
      console.log("User created");
    }
  }

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
