import React, { useState } from "react";
import "./style.css";

const SERVER_URL = "http://localhost:8080/api/v1";

const AddProject = ({ currentUser }) => {
    const [url, setURL] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [projectId, setProjectId] = useState(null);

    const handleAddProject = async () => {
        const projectData = {
            name,
            repoURL: url,
        };

        console.log("Attempting to create project with data:", projectData);

        try {
            const response = await fetch(`${SERVER_URL}/projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(projectData),
            });

            console.log("Response from /projects:", response);

            if (response.ok) {
                const result = await response.json();
                console.log("Project created successfully:", result);
                setProjectId(result.id);
                setMessage(`Project "${result.name}" added successfully!`);

                await addCurrentUserAsMP(result.id, currentUser.id);
            } else {
                const errorData = await response.json();
                console.error("Error response from /projects:", errorData);
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error adding project:", error);
            setMessage("An unexpected error occurred. Please try again.");
        }
    };

    const addCurrentUserAsMP = async (projectId, userId) => {
        console.log("Adding current user as MP:", { projectId, userId });

        try {
            const response = await fetch(`${SERVER_URL}/mps`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ projectId, userId }),
            });

            console.log("Response from /mps:", response);

            if (response.ok) {
                setMessage(
                    (prevMessage) =>
                        prevMessage +
                        ` MP "${currentUser.name}" added successfully!`
                );
            } else {
                const errorData = await response.json();
                console.error("Error response from /mps:", errorData);
                setMessage(
                    (prevMessage) =>
                        prevMessage +
                        ` Error adding MP "${currentUser.name}": ${errorData.message}`
                );
            }
        } catch (error) {
            console.error("Error adding MP:", error);
            setMessage(
                (prevMessage) =>
                    prevMessage +
                    " An unexpected error occurred while adding MP."
            );
        }
    };

    return (
        <div className="add-project-page">
            <h2>Add New Project</h2>
            {message && <p className="feedback-message">{message}</p>}
            <input
                type="url"
                placeholder="Project Repository URL"
                value={url}
                onChange={(e) => setURL(e.target.value)}
            />
            <input
                type="text"
                placeholder="Project Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAddProject}>Add Project</button>
        </div>
    );
};

export default AddProject;
