import { Tst } from "../models/config.js";

const createTST = async (projectId, userId) => {
    if (!projectId || !userId) {
        throw Error("Incomplete data: projectId and userId are required to create a TST.");
    }

    const newTST = await TST.create({
        projectId: projectId,
        userId: userId
    });

    return newTST;
};

export {
    createTST
};
