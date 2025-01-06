import React from "react";
import "./style.css";

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Bug Tracking App</h1>
            <img src="/path-to-your-image.jpg" alt="Bug Tracking" />
            <button onClick={() => (window.location.href = "/login")}>
                Log In / Sign Up
            </button>
        </div>
    );
};

export default Home;
