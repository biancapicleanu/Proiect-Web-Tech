import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddProject from "./pages/NewProject";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="app">
                <nav>
                    <ul>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/signup">Sign Up</a>
                        </li>
                        <li>
                            <a href="/add-project">Add Project</a>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    {/* Rutele aplicației */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/add-project" element={<AddProject />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
