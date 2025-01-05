import * as bugsService from "../services/bug.js";

const createBug = async (req, res) => {
    try {
        const bug = await bugsService.createBug(req.body);
        res.status(201).send({ bug });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

const allocateMpToBug = async (req, res) => {
    try {
        const bug = await bugsService.allocateMpToBug(req.params.bugId, req.body.mpId);
        res.status(200).send({ bug });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export {
    createBug,
    allocateMpToBug
};
