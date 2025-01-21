import React from "react";
import "./style.css";

const Toolbar = () => {
    return (
        <header className="toolbar">
            <div className="toolbar-left">
                <button
                    className="toolbar-button home-button"
                    onClick={() => (window.location.href = "/")}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
                        alt="Home Icon"
                        className="toolbar-icon"
                    />
                </button>
            </div>
            <div className="toolbar-center">
                <button
                    className="toolbar-button"
                    onClick={() => (window.location.href = "/add-project")}
                >
                    Add Project
                </button>
                <button
                    className="toolbar-button"
                    onClick={() => (window.location.href = "/all-projects")}
                >
                    All Projects
                </button>
                <button
                    className="toolbar-button"
                    onClick={() => (window.location.href = "/mp-projects")}
                >
                    My MP Projects
                </button>
                <button
                    className="toolbar-button"
                    onClick={() => (window.location.href = "/tst-projects")}
                >
                    My TST Projects
                </button>
            </div>
            <div className="toolbar-right">
                <button
                    className="toolbar-button user-button"
                    onClick={() => (window.location.href = "/profile")}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                        alt="User Icon"
                        className="toolbar-icon"
                    />
                </button>
            </div>
        </header>
    );
};

export default Toolbar;
