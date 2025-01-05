import * as usersService from "../services/user.js";

const createUser = async (req, res) => {
    try {
        const user = await usersService.createUser(req.body);
        res.status(201).send({ user });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export {
    createUser
};
