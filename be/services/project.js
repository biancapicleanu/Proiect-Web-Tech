import { Project } from "../models/config.js";

const createProject = async (data) => {
    const { name, repoURL } = data;

    if (!name || !repoURL) {
        throw Error(
            "Incomplete data: name and repoURL are required to create a project."
        );
    }

    const existingProject = await Project.findOne({ where: { repoURL } });
    if (existingProject) {
        throw Error("A project with this repository URL already exists.");
    }

    const newProject = await Project.create({
        name,
        repoURL,
    });

    return newProject;
};

export { createProject };
