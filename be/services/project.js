import { Project } from "../models/config.js";
import { Mp } from "../models/config.js";
import { Tst } from "../models/config.js";

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

const allProjects = async () => {
    const projects = await Project.findAll();

    if (!projects || projects.length === 0) {
        throw new Error("No projects found.");
    }

    return projects.map((project) => ({
        id: project.id,
        name: project.name,
        repoURL: project.repoURL,
    }));
};

const getMpProjects = async (userId) => {
    const projects = await Project.findAll({
        include: [
            {
                model: Mp,
                where: { user_id: userId },
            },
        ],
    });

    return projects;
};

const getTstProjects = async (userId) => {
    const projects = await Project.findAll({
        include: [
            {
                model: Tst,
                where: { user_id: userId },
            },
        ],
    });

    return projects;
};

export { createProject, allProjects, getMpProjects, getTstProjects };
