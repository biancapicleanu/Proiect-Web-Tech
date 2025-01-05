import * as mpsService from "../services/mp.js";

const createMP = async (req, res) => {
    try {
        const mp = await mpsService.createMP(req.body);
        res.status(201).send({ mp });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export {
    createMP
};
