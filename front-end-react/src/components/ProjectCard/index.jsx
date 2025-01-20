import React from "react";
import "./style.css";

const ProjectCard = ({ project }) => {
    console.log(project);
    if (!project) {
        return <p>No project selected.</p>;
    }

    return (
        <div className="project-card-details">
            <h2>{project.name}</h2>
            <p>
                <strong>Repository:</strong> {project.repoURL}
            </p>
            <p>
                <strong>Created At:</strong>{" "}
                {new Date(project.createdAt).toLocaleDateString()}
            </p>
            <p>
                <strong>Updated At:</strong>{" "}
                {new Date(project.updatedAt).toLocaleDateString()}
            </p>
            {/* Adaugă alte detalii ale proiectului dacă este cazul */}
        </div>
    );
};

export default ProjectCard;
