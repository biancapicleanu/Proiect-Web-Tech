import React from "react";
import "./style.css";

const Toolbar = () => {
    return (
        <header className="toolbar">
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
        </header>
    );
};

export default Toolbar;
