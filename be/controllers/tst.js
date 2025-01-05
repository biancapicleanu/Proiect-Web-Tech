import * as tstsService from "../services/tst.js";

const createTST = async (req, res) => {
    try {
        const tst = await tstsService.createTST(req.body);
        res.status(201).send({ tst });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export {
    createTST,
};
