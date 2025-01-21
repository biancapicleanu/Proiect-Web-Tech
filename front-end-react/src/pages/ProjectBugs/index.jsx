import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const SERVER_URL = "http://localhost:8080/api/v1";

const BugList = () => {
    const { projectId } = useParams();
    const [bugs, setBugs] = useState([]);
    const [message, setMessage] = useState("");
    const [editableBugId, setEditableBugId] = useState(null);
    const [editData, setEditData] = useState({});

    let currentUser = undefined;
    if (localStorage.getItem("userDetails")) {
        currentUser = JSON.parse(localStorage.getItem("userDetails"));
    }

    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await fetch(
                    `${SERVER_URL}/bugs/project/${projectId}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setBugs(data.bugs);
                } else {
                    setMessage("There are no bugs for this project.");
                }
            } catch (error) {
                console.log("Error fetching bugs:", error);
            }
        };

        fetchBugs();
    }, [projectId]);

    const handleEditClick = (bug) => {
        setEditableBugId(bug.id);
        setEditData({
            id: bug.id,
            severity: bug.severity,
            priority: bug.priority,
            status: bug.status,
            description: bug.description,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveClick = async (bugId) => {
        try {
            const response = await fetch(`${SERVER_URL}/bugs/${bugId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editData),
            });

            if (response.ok) {
                const updatedBug = await response.json();
                setBugs((prevBugs) =>
                    prevBugs.map((bug) =>
                        bug.id === updatedBug.bug.id ? updatedBug.bug : bug
                    )
                );
                console.log(bugs);
                setEditableBugId(null);
                setMessage("Bug updated successfully.");
            } else {
                setMessage("Error updating the bug.");
            }
        } catch (error) {
            console.error("Error updating bug:", error);
            setMessage("An unexpected error occurred.");
        }
    };

    const handleCancelClick = () => {
        setEditableBugId(null);
    };

    const handleAssignBug = async (bugId) => {
        try {
            const response = await fetch(`${SERVER_URL}/bugs/${bugId}/assign`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: currentUser.id }),
            });

            if (response.ok) {
                const updatedBug = await response.json();
                setBugs((prevBugs) =>
                    prevBugs.map((bug) =>
                        bug.id === updatedBug.bug.id ? updatedBug.bug : bug
                    )
                );
                setMessage("Bug assigned successfully.");
            } else {
                const error = await response.json();
                setMessage(error.message || "Error assigning the bug.");
            }
        } catch (error) {
            console.error("Error assigning bug:", error);
            setMessage("An unexpected error occurred.");
        }
    };

    return (
        <div className="content">
            <div className="bug-list-page">
                <h2>Bugs for Project {projectId}</h2>
                {message && <p className="feedback-message">{message}</p>}
                <div className="bug-cards-container">
                    {bugs.map((bug) => (
                        <div className="bug-card" key={bug.id}>
                            <p className="bug-details">
                                <strong>Assigned MP:</strong>{" "}
                                {bug.mpId ? "YES" : "NO"}
                            </p>
                            {editableBugId === bug.id ? (
                                <div className="edit-form">
                                    <input
                                        type="text"
                                        name="description"
                                        value={editData.description}
                                        onChange={handleInputChange}
                                        placeholder="Description"
                                    />
                                    <select
                                        name="severity"
                                        value={editData.severity}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Minor">Minor</option>
                                        <option value="Major">Major</option>
                                        <option value="Critical">
                                            Critical
                                        </option>
                                    </select>
                                    <select
                                        name="priority"
                                        value={editData.priority}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                    <select
                                        name="status"
                                        value={editData.status}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Resolved">
                                            Resolved
                                        </option>
                                        <option value="In Progress">
                                            In Progress
                                        </option>
                                        <option value="Unresolved">
                                            Unresolved
                                        </option>
                                    </select>
                                    <button
                                        className="save-button"
                                        onClick={() => handleSaveClick(bug.id)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="cancel-button"
                                        onClick={handleCancelClick}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="bug-h3">
                                        {bug.description}{" "}
                                    </h3>
                                    <p className="bug-details">
                                        <strong>Severity:</strong>{" "}
                                        {bug.severity}
                                    </p>
                                    <p className="bug-details">
                                        <strong>Priority:</strong>{" "}
                                        {bug.priority}
                                    </p>
                                    <p className="bug-details">
                                        <strong>Status:</strong> {bug.status}
                                    </p>
                                    {bug.mpId === currentUser.id && (
                                        <button
                                            className="edit-button"
                                            onClick={() => handleEditClick(bug)}
                                        >
                                            Edit
                                        </button>
                                    )}
                                    {!bug.mpId && (
                                        <button
                                            className="assign-button"
                                            onClick={() =>
                                                handleAssignBug(bug.id)
                                            }
                                        >
                                            Assign to Me
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BugList;
