import * as projectsService from "../services/project.js";

const createProject = async (req, res) => {
    try {
        const project = await projectsService.createProject(req.body);
        res.status(201).send({ project });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};



export {
    createProject
};
