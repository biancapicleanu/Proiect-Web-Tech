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

export { createProject };
