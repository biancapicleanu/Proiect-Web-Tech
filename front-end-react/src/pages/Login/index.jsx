import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SERVER_URL = "http://localhost:8080/api/v1";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const loginData = { email, password };

        try {
            const response = await fetch(`${SERVER_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const userDetails = await response.json();
                setMessage(`Welcome back, ${userDetails.email}!`);
                console.log(userDetails);

                localStorage.setItem(
                    "userDetails",
                    JSON.stringify(userDetails)
                );

                navigate("/");
            } else {
                const error = await response.json();
                setMessage(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error("Login failed:", error);
            setMessage("An unexpected error occurred.");
        }
    };

    return (
        <div className="content">
            <div className="login-page">
                <h2>Log In</h2>
                {message && <p className="feedback-message">{message}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button onClick={handleLogin} className="login-button">
                    Log In
                </button>
                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
