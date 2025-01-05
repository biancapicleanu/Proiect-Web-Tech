import { Project } from "../models/config.js";

const createProject = async (data) => {
    const { name, state, repoURL } = data;

    if (!name || !state || !repoURL) {
        throw Error("Incomplete data: name, state, and repoURL are required to create a project.");
    }

    const existingProject = await Project.findOne({ where: { repoURL } });
    if (existingProject) {
        throw Error("A project with this repository URL already exists.");
    }

    const newProject = await Project.create({
        name,
        state,
        repoURL
    });

    return newProject;
};

export {
    createProject
};
