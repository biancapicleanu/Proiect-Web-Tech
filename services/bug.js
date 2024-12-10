import { Op } from "sequelize";
import { Bug, Mp, Tst, Project } from "../models/config.js";

const createBug = async (data) => {
    if (!data.description || !data.severity || !data.priority || !data.status || !data.commitURL || !data.tstId || !data.projectId) {
        throw Error("Incomplete data: A bug requires description, severity, priority, status, commitURL, tester ID, and project ID.");
    }

    return await Bug.create({
        description: data.description,
        severity: data.severity,
        priority: data.priority,
        status: data.status,
        commitURL: data.commitURL,
        mpId: data.mpId || null,
        tstId: data.tstId,
        projectId: data.projectId
    });
};

const allocateMpToBug = async (bugId, mpId) => {
    const bug = await Bug.findByPk(bugId);
    if (!bug) {
        throw Error(`Bug with id ${bugId} does not exist.`);
    }

    const mp = await MP.findByPk(mpId);
    if (!mp) {
        throw Error(`MP with id ${mpId} does not exist.`);
    }

    bug.mpId = mpId;

    await bug.save();

    return bug;
};

export {
    createBug,
    allocateMpToBug
};
