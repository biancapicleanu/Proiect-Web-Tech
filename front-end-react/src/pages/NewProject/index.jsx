import React, { useState, useEffect } from "react";
import "./style.css";

const SERVER_URL = "http://localhost:8080/api/v1";

const AddProject = () => {
    const [url, setURL] = useState("");
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [projectId, setProjectId] = useState(null);

    let currentUser = undefined;
    if (localStorage.getItem("userDetails")) {
        currentUser = JSON.parse(localStorage.getItem("userDetails"));
    }

    // Fetch all users except the current user
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${SERVER_URL}/users/`);
                if (response.ok) {
                    const data = await response.json();
                    // Exclude the current user
                    const filteredUsers = data.filter(
                        (user) => user.id !== currentUser?.id
                    );
                    setUsers(filteredUsers);
                } else {
                    console.error("Error fetching users");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchUsers();
    }, [currentUser]);

    const handleAddProject = async () => {
        const projectData = {
            name,
            repoURL: url,
        };

        if (currentUser) {
            try {
                const response = await fetch(`${SERVER_URL}/projects`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(projectData),
                });

                if (response.ok) {
                    const result = await response.json();
                    setProjectId(result.project.id);
                    console.log(result);
                    setMessage(
                        `Project "${result.project.name}" added successfully!`
                    );

                    await addCurrentUserAsMP(result.project.id, currentUser.id);

                    for (const userId of selectedUsers) {
                        console.log(userId);
                        await addUserAsMP(result.project.id, userId);
                    }
                } else {
                    const errorData = await response.json();
                    setMessage(`Error: ${errorData.message}`);
                }
            } catch (error) {
                console.error("Error adding project:", error);
                setMessage("An unexpected error occurred. Please try again.");
            }
        }
    };

    const addCurrentUserAsMP = async (projectId, userId) => {
        try {
            await fetch(`${SERVER_URL}/mps`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ projectId, userId }),
            });
        } catch (error) {
            console.error("Error adding current user as MP:", error);
        }
    };

    const addUserAsMP = async (projectId, userId) => {
        try {
            await fetch(`${SERVER_URL}/mps`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ projectId, userId }),
            });
        } catch (error) {
            console.error(`Error adding user ${userId} as MP:`, error);
        }
    };

    const handleUserSelection = (userId, isChecked) => {
        setSelectedUsers((prevSelected) =>
            isChecked
                ? [...prevSelected, userId]
                : prevSelected.filter((id) => id !== userId)
        );
    };

    return (
        <div className="content" id="add-project-container">
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
            <div>
                <h3 className="advice">Select Members for the Project:</h3>
                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        width: "calc(100% - 15px)",
                        maxWidth: "400px",
                        height: "200px",
                        overflowY: "scroll",
                    }}
                >
                    {users.map((user) => (
                        <div key={user.id} style={{ marginBottom: "5px" }}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={user.id}
                                    onChange={(e) =>
                                        handleUserSelection(
                                            user.id,
                                            e.target.checked
                                        )
                                    }
                                />
                                {user.name} ({user.email})
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <button
                style={{
                    margin: "10px",
                    padding: "10px",
                    width: "100%",
                }}
                onClick={handleAddProject}
            >
                Add Project
            </button>
        </div>
    );
};

export default AddProject;
