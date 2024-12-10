import express from "express";
import * as projectsController from "../controllers/project.js";

const router = express.Router();

router.post("/", projectsController.createProject);

export { router };