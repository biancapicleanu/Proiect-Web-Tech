import { User } from "../models/config.js";

const createUser = async (data) => {
    const { email, password } = data;

    if (!email || !password) {
        throw Error("Incomplete data: email and password are required to create a user.");
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw Error("A user with this email already exists.");
    }

    const newUser = await User.create({
        email,
        password
    });

    return newUser;
};

export {
    createUser
};
