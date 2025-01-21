import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const SERVER_URL = "https://proiect-web-tech.onrender.com/api/v1";

const AddBug = () => {
    const { projectId } = useParams();

    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Unresolved");
    const [severity, setSeverity] = useState("Low");
    const [priority, setPriority] = useState("Low");
    const [commitURL, setCommitURL] = useState("");
    const [message, setMessage] = useState("");

    let currentUser = undefined;
    if (localStorage.getItem("userDetails")) {
        currentUser = JSON.parse(localStorage.getItem("userDetails"));
    }

    const handleAddBug = async () => {
        if (!description || !commitURL) {
            setMessage("Please fill in all required fields.");
            return;
        }

        const bugData = {
            projectId,
            description,
            severity,
            priority,
            status,
            commitURL: commitURL,
            tstId: currentUser.id,
        };

        try {
            const response = await fetch(`${SERVER_URL}/bugs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bugData),
            });

            if (response.ok) {
                setMessage("Bug added successfully!");
                setDescription("");
                setSeverity("Low");
                setPriority("Low");
                setStatus("Unresolved");
                setCommitURL("");
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error adding bug:", error);
            setMessage("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="content">
            <div className="add-bug-page">
                <h2>New Bug</h2>
                {message && <p className="feedback-message">{message}</p>}
                <div className="form-group">
                    <label>Description *</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the bug..."
                        rows={4}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Severity</label>
                    <select
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="Minor">Minor</option>
                        <option value="Major">Major</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="Resolved">Resolved</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Unresolved">Unresolved</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Commit Link *</label>
                    <input
                        type="url"
                        value={commitURL}
                        onChange={(e) => setCommitURL(e.target.value)}
                        placeholder="Link to the related commit"
                        required
                    />
                </div>
                <button onClick={handleAddBug}>Add Bug</button>
            </div>
        </div>
    );
};

export default AddBug;
