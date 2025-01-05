import express from "express";
import * as usersController from "../controllers/user.js";

const router = express.Router();

router.post("/", usersController.createUser);

export { router };