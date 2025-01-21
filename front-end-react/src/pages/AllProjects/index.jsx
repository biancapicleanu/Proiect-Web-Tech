import React, { useEffect, useState } from "react";
import "./style.css";

const SERVER_URL = "https://proiect-web-tech.onrender.com/api/v1";

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [message, setMessage] = useState("");

    let currentUser = undefined;
    if (localStorage.getItem("userDetails")) {
        currentUser = JSON.parse(localStorage.getItem("userDetails"));
    }

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${SERVER_URL}/projects`);
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);
                    console.log(data);
                } else {
                    console.error("Error fetching projects");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleBecomeTester = async (projectId) => {
        if (!currentUser) {
            setMessage("You must be logged in to become a tester.");
            return;
        }

        const requestData = {
            projectId,
            userId: currentUser.id,
        };

        console.log("Sending data to /tsts:", requestData);

        try {
            const response = await fetch(`${SERVER_URL}/tsts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                setMessage(
                    `You have successfully become a tester for project ${projectId}.`
                );
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error becoming tester:", error);
            setMessage("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="content">
            <h2>All Projects</h2>
            {message && <p className="feedback-message">{message}</p>}
            <div className="project-list">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-item"
                        onClick={() => handleBecomeTester(project.id)}
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
        </div>
    );
};

export default AllProjects;
