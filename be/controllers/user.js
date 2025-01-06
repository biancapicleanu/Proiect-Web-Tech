import * as usersService from "../services/user.js";

const createUser = async (req, res) => {
    try {
        const newUser = await usersService.createUser(req.body);
        res.status(201).json({ email: newUser.email });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await usersService.loginUser(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createUser, loginUser };
