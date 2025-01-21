import React from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import AddProject from "./pages/NewProject";
import AllProjects from "./pages/AllProjects";
import AddBug from "./pages/BugManager";
import TstProjects from "./pages/TstProjects";
import MpProjects from "./pages/MpProjects";
import SignUp from "./pages/SignUp";
import BugList from "./pages/ProjectBugs";
import Toolbar from "./components/Header";

const ProtectedRoute = ({ children }) => {
    const currentUser = localStorage.getItem("userDetails");

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Toolbar /> {children}
        </>
    );
};

const MainRouter = () => (
    <Routes>
        <Route
            path="/"
            element={
                <ProtectedRoute>
                    <App />
                </ProtectedRoute>
            }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
            path="/add-project"
            element={
                <ProtectedRoute>
                    <AddProject />
                </ProtectedRoute>
            }
        />
        <Route
            path="/all-projects"
            element={
                <ProtectedRoute>
                    <AllProjects />
                </ProtectedRoute>
            }
        />
        <Route
            path="/mp-projects"
            element={
                <ProtectedRoute>
                    <MpProjects />
                </ProtectedRoute>
            }
        />
        <Route
            path="/tst-projects"
            element={
                <ProtectedRoute>
                    <TstProjects />
                </ProtectedRoute>
            }
        />
        <Route
            path="/add-bug/:projectId"
            element={
                <ProtectedRoute>
                    <AddBug />
                </ProtectedRoute>
            }
        />
        <Route
            path="/projects/:projectId/bugs"
            element={
                <ProtectedRoute>
                    <BugList />
                </ProtectedRoute>
            }
        />
    </Routes>
);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <MainRouter />
        </Router>
    </React.StrictMode>
);
