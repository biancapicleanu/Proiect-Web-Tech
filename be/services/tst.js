import { Tst } from "../models/config.js";

const createTST = async (data) => {
    const projectId = data.projectId;
    const userId = data.userId;
    if (!projectId || !userId) {
        throw Error(
            "Incomplete data: projectId and userId are required to create a TST."
        );
    }

    const existingTST = await Tst.findOne({ where: { userId, projectId } });
    if (existingTST) {
        throw Error("You are already a tester for this project.");
    }

    const newTST = await Tst.create({
        projectId: projectId,
        userId: userId,
    });

    return newTST;
};

export { createTST };
