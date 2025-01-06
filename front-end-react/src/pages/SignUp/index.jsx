import React, { useState } from "react";
import "./style.css";

const SERVER_URL = "http://localhost:8080/api/v1";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

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
                setMessage(`Account created successfully for ${result.email}!`);
                setEmail("");
                setPassword("");
                setConfirmPassword("");
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
