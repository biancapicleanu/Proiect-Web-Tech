import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import "./style.css";

const SERVER_URL = "https://proiect-web-tech.onrender.com/api/v1";

const MpProjects = () => {
    const [projects, setProjects] = useState([]);
    const [bugCounts, setBugCounts] = useState({});
    const [selectedProject, setSelectedProject] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    let currentUser = undefined;
    if (localStorage.getItem("userDetails")) {
        currentUser = JSON.parse(localStorage.getItem("userDetails"));
    }

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    `${SERVER_URL}/projects/mp/${currentUser.id}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);

                    const bugCountsResponse = await fetch(
                        `${SERVER_URL}/bugs/count/${currentUser.id}`
                    );
                    if (bugCountsResponse.ok) {
                        const counts = await bugCountsResponse.json();
                        setBugCounts(counts);
                    }
                } else {
                    setMessage(
                        "You do not have the role of MP in any project."
                    );
                }
            } catch (error) {
                console.log("Error fetching projects:", error.message);
            }
        };

        if (currentUser) {
            fetchProjects();
        }
    }, [currentUser]);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleViewBugs = (projectId) => {
        navigate(`/projects/${projectId}/bugs`);
    };

    return (
        <div className="content">
            <div className="project-container">
                <h2>Your Projects</h2>
                {message && <p className="feedback-message">{message}</p>}
                <div className="project-list">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-item"
                            onClick={() => handleProjectClick(project)}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "10px",
                                marginBottom: "10px",
                                cursor: "pointer",
                                position: "relative",
                            }}
                        >
                            <h3>{project.name}</h3>
                            <p>Repository: {project.repoURL}</p>
                            {bugCounts[project.id] !== undefined && (
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        backgroundColor: "red",
                                        color: "white",
                                        padding: "5px 10px",
                                        borderRadius: "50%",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {bugCounts[project.id]}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                {selectedProject && (
                    <div className="project-details">
                        <ProjectCard project={selectedProject} />
                        <button
                            onClick={() => handleViewBugs(selectedProject.id)}
                            style={{
                                marginTop: "10px",
                                padding: "10px 15px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            View Bugs
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MpProjects;
