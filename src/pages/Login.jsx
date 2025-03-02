import { supabase } from "../supabaseClient";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) {
                return;
            } else {
                navigate("/");
            }
        };

        fetchUser();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            setError(error.message);
            console.log(error);
        } else {
            navigate("/");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
