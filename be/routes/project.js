import express from "express";
import * as projectsController from "../controllers/project.js";

const router = express.Router();

router.post("/", projectsController.createProject);
router.get("/", projectsController.getAllProjects);
router.get("/mp/:userId", projectsController.getMpProjects);
router.get("/tst/:userId", projectsController.getTstProjects);

export { router };
