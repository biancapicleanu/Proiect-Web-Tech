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

const allMPs = async () => {
    const mps = await Mp.findAll();

    if (!mps || mps.length === 0) {
        throw new Error("No mps found.");
    }

    return mps.map((mp) => ({
        userId: mp.user_id,
        projectId: mp.project_id,
    }));
};

export { createMP, allMPs };
