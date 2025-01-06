import React, { useState } from "react";
import "./style.css";

const ManageBug = () => {
    const [commitURL, setCommitURL] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [severity, setSeverity] = useState("");
    const [priority, setPriority] = useState("");

    const handleUpdate = () => {
        console.log(
            "Bug updated with status:",
            status,
            "Commit URL:",
            commitURL
        );
    };

    return (
        <div className="manage-bug-page">
            <h2>Manage Bug</h2>
            <input
                type="url"
                placeholder="Commit URL"
                value={commitURL}
                onChange={(e) => setCommitURL(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Select Status</option>
                <option value="Resolved">Resolved</option>
                <option value="In Progress">In Progress</option>
                <option value="Unresolved">Unresolved</option>
            </select>
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
            >
                <option value="">Select Severity</option>
                <option value="Low">Low</option>
                <option value="Minor">Minor</option>
                <option value="Major">Major</option>
                <option value="Critical">Critical</option>
            </select>
            <button onClick={handleUpdate}>Update Bug</button>
        </div>
    );
};

export default ManageBug;
