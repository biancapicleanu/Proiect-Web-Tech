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
        const bug = await bugsService.allocateMpToBug(
            req.params.bugId,
            req.body.userId
        );
        res.status(200).send({ bug });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

const getBugsCount = async (req, res) => {
    try {
        const bugs = await bugsService.getBugsCount(req.params.userId);
        res.status(200).send({ bugs });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

const getProjectBugs = async (req, res) => {
    try {
        const bugs = await bugsService.getProjectBugs(req.params.projectId);
        res.status(200).send({ bugs });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

const updateBug = async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);
        const bug = await bugsService.updateBug(req.params, req.body);
        res.status(200).send({ bug });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export { createBug, allocateMpToBug, getBugsCount, getProjectBugs, updateBug };
