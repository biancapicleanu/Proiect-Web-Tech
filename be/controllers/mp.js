import * as mpsService from "../services/mp.js";

const createMP = async (req, res) => {
    try {
        const { projectId, userId } = req.body;
        console.log("Received data:", req.body);

        const mp = await mpsService.createMP(projectId, userId);
        res.status(201).send({ mp });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export { createMP };
