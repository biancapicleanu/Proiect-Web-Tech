import { User } from "../models/config.js";

const createUser = async (data) => {
    const { email, password } = data;

    if (!email || !password) {
        throw Error(
            "Incomplete data: email and password are required to create a user."
        );
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw Error("A user with this email already exists.");
    }

    const newUser = await User.create({
        email,
        password,
    });

    return {
        id: newUser.dataValues.id,
        email: newUser.dataValues.email,
    };
};

const loginUser = async (email, password) => {
    if (!email || !password) {
        throw new Error("Email and password are required.");
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error("User not found.");
    }

    if (user.password !== password) {
        throw new Error("Incorrect password.");
    }

    return {
        id: user.id,
        email: user.email,
    };
};

const allUsers = async () => {
    const users = await User.findAll();

    if (!users || users.length === 0) {
        throw new Error("No users found.");
    }

    return users.map((user) => ({
        id: user.id,
        email: user.email,
    }));
};

export { createUser, loginUser, allUsers };
