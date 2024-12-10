import { Mp } from "../models/config.js";

const createMP = async (projectId, userId) => {
    if (!projectId || !userId) {
        throw Error("Incomplete data: projectId and userId are required to create an MP.");
    }

    const newMP = await MP.create({
        projectId: projectId,
        userId: userId
    });

    return newMP;
};

export {
    createMP
};
