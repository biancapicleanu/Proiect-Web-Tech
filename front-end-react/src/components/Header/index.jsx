import React, { useState } from "react";
import "./style.css";

const Toolbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("userDetails");
        window.location.href = "/login";
    };

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
                <div className="user-menu">
                    <button
                        className="toolbar-button user-button"
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                            alt="User Icon"
                            className="toolbar-icon"
                        />
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <button
                                className="dropdown-item"
                                onClick={handleLogout}
                            >
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Toolbar;
