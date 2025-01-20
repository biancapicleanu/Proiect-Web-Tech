import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddProject from "./pages/NewProject";
import AllProjects from "./pages/AllProjects";
import MpProjects from "./pages/MpProjects";
import TstProjects from "./pages/TstProjects";
import AddBug from "./pages/BugManager";
import BugList from "./pages/ProjectBugs";
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
                        <li>
                            <a href="/all-projects">All Projects</a>
                        </li>
                        <li>
                            <a href="/mp-projects">My MP Projects</a>
                        </li>
                        <li>
                            <a href="/tst-projects">My TST Projects</a>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/add-project" element={<AddProject />} />
                    <Route path="/all-projects" element={<AllProjects />} />
                    <Route path="/mp-projects" element={<MpProjects />} />
                    <Route path="/tst-projects" element={<TstProjects />} />
                    <Route path="/add-bug/:projectId" element={<AddBug />} />
                    <Route
                        path="/projects/:projectId/bugs"
                        element={<BugList />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
