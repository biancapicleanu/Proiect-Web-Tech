import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SERVER_URL = "https://proiect-web-tech.onrender.com/api/v1";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = {
            email,
            password,
        };

        try {
            const response = await fetch(`${SERVER_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                const userDetails = result;
                console.log(result);
                setMessage(`Account created successfully for ${result.email}!`);
                setEmail("");
                setPassword("");
                setConfirmPassword("");

                localStorage.setItem(
                    "userDetails",
                    JSON.stringify(userDetails)
                );

                navigate("/");
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error creating user:", error);
            setMessage("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            {message && <p className="feedback-message">{message}</p>}
            <input
                type="email"
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
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;
