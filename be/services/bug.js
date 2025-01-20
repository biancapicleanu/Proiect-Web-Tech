import { Op } from "sequelize";
import { db } from "../models/config.js";
import { Bug, Mp, Tst, Project } from "../models/config.js";

const createBug = async (data) => {
    if (
        !data.description ||
        !data.severity ||
        !data.priority ||
        !data.status ||
        !data.commitURL ||
        !data.tstId ||
        !data.projectId
    ) {
        throw Error(
            "Incomplete data: A bug requires description, severity, priority, status, commitURL, tester ID, and project ID."
        );
    }

    return await Bug.create({
        description: data.description,
        severity: data.severity,
        priority: data.priority,
        status: data.status,
        commitURL: data.commitURL,
        mpId: data.mpId || null,
        tstId: data.tstId,
        projectId: data.projectId,
    });
};

const allocateMpToBug = async (bugId, mpId) => {
    const bug = await Bug.findByPk(bugId);
    if (!bug) {
        throw Error(`Bug with id ${bugId} does not exist.`);
    }

    const mp = await Mp.findByPk(mpId);
    if (!mp) {
        throw Error(`MP with id ${mpId} does not exist.`);
    }

    bug.mpId = mpId;

    await bug.save();

    return bug;
};

const getBugsCount = async (userId) => {
    const mpProjects = await Project.findAll({
        attributes: ["id"],
        include: [
            {
                model: Mp,
                where: { user_id: userId },
            },
        ],
    });

    const projectIds = mpProjects.map((project) => project.id);

    if (projectIds.length === 0) {
        return {};
    }

    const counts = await Bug.findAll({
        attributes: ["projectId", [db.fn("COUNT", db.col("id")), "bugCount"]],
        where: {
            projectId: projectIds,
        },
        group: ["projectId"],
    });

    const result = counts.reduce((acc, item) => {
        acc[item.projectId] = item.dataValues.bugCount;
        return acc;
    }, {});

    return result;
};

const getProjectBugs = async (projectId) => {
    const bugs = await Bug.findAll({
        where: { projectId },
    });

    if (!bugs.length) {
        throw Error("No bugs found for this project.");
    }

    return bugs;
};

const updateBug = async (params, updatedBug) => {
    const bug = await Bug.findByPk(params.bugId);
    if (!bug) {
        return res.status(404).json({ message: "Bug not found." });
    }

    bug.description = updatedBug.description;
    bug.severity = updatedBug.severity;
    bug.priority = updatedBug.priority;
    bug.status = updatedBug.status;

    await bug.save();

    return bug;
};

export { createBug, allocateMpToBug, getBugsCount, getProjectBugs, updateBug };
