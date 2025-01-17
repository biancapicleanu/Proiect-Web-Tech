import { Mp } from "../models/config.js";

const createMP = async (projectId, userId) => {
    console.log("Received data - projectId:", projectId, "userId:", userId);

    if (!projectId || !userId) {
        throw Error(
            "Incomplete data: projectId and userId are required to create an MP."
        );
    }

    const newMP = await Mp.create({
        project_id: projectId,
        user_id: userId,
    });

    return newMP;
};

export { createMP };
