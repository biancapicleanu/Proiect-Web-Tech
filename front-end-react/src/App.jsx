import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="content">
            <div class="background-logo">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 200 200"
                    width="200"
                    height="200"
                >
                    <circle
                        cx="100"
                        cy="100"
                        r="95"
                        fill="#4CAF50"
                        stroke="#2E7D32"
                        stroke-width="5"
                    />
                    <ellipse
                        cx="100"
                        cy="120"
                        rx="35"
                        ry="50"
                        fill="#FFFFFF"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <line
                        x1="65"
                        y1="70"
                        x2="135"
                        y2="70"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <line
                        x1="50"
                        y1="90"
                        x2="150"
                        y2="90"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <circle
                        cx="100"
                        cy="65"
                        r="20"
                        fill="#FFFFFF"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <line
                        x1="85"
                        y1="45"
                        x2="60"
                        y2="20"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <line
                        x1="115"
                        y1="45"
                        x2="140"
                        y2="20"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <line
                        x1="70"
                        y1="120"
                        x2="40"
                        y2="140"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <line
                        x1="70"
                        y1="140"
                        x2="40"
                        y2="160"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <line
                        x1="130"
                        y1="120"
                        x2="160"
                        y2="140"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <line
                        x1="130"
                        y1="140"
                        x2="160"
                        y2="160"
                        stroke="#000000"
                        stroke-width="3"
                    />
                    <circle
                        cx="160"
                        cy="160"
                        r="30"
                        fill="none"
                        stroke="#000000"
                        stroke-width="4"
                    />
                    <line
                        x1="180"
                        y1="180"
                        x2="210"
                        y2="210"
                        stroke="#000000"
                        stroke-width="4"
                    />
                    <text
                        x="100"
                        y="190"
                        fill="#FFFFFF"
                        font-size="18"
                        text-anchor="middle"
                        font-family="Arial, sans-serif"
                    ></text>
                </svg>
            </div>
            <h1>Welcome to Bug Tracking</h1>
            <p>Start managing your projects and track your bugs efficiently.</p>
        </div>
    );
};

export default App;
