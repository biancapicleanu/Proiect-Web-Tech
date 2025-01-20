import * as projectsService from "../services/project.js";

const createProject = async (req, res) => {
    try {
        console.log("Data received for project creation:", req.body);

        const project = await projectsService.createProject(req.body);
        res.status(201).json({ project });
    } catch (error) {
        console.error("Error creating project:", error);

        if (error.name === "SequelizeValidationError") {
            const validationErrors = error.errors.map((err) => err.message);
            res.status(400).json({
                message: "Validation error",
                errors: validationErrors,
            });
        } else {
            res.status(400).json({ message: error.message });
        }
    }
};

const getAllProjects = async (req, res) => {
    try {
        const projects = await projectsService.allProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMpProjects = async (req, res) => {
    try {
        const projects = await projectsService.getMpProjects(req.params.userId);
        console.log(projects);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTstProjects = async (req, res) => {
    try {
        const projects = await projectsService.getTstProjects(
            req.params.userId
        );
        console.log(projects);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createProject, getAllProjects, getMpProjects, getTstProjects };
