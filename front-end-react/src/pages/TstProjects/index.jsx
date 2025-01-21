import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SERVER_URL = "https://proiect-web-tech.onrender.com/api/v1";

const TstProjects = () => {
    const [projects, setProjects] = useState([]);
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
                    `${SERVER_URL}/projects/tst/${currentUser.id}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);
                } else {
                    setMessage("Error fetching your projects.");
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
                setMessage("An unexpected error occurred.");
            }
        };

        if (currentUser) {
            fetchProjects();
        }
    }, [currentUser]);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        console.log(project);
    };

    const handleAddBug = (projectId) => {
        navigate(`/add-bug/${projectId}`);
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
                            }}
                        >
                            <h3>{project.name}</h3>
                            <p>Repository: {project.repoURL}</p>
                        </div>
                    ))}
                </div>
                {selectedProject && (
                    <div className="project-details">
                        <ProjectCard project={selectedProject} />
                        <button
                            id="bug-button"
                            onClick={() => handleAddBug(selectedProject.id)}
                        >
                            Add new bug
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TstProjects;
