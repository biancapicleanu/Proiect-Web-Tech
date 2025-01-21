import express from "express";
import * as bugsController from "../controllers/bug.js";

const router = express.Router();

router.post("/", bugsController.createBug);
router.put("/:bugId/assign", bugsController.allocateMpToBug);
router.get("/count/:userId", bugsController.getBugsCount);
router.get("/project/:projectId", bugsController.getProjectBugs);
router.put("/:bugId", bugsController.updateBug);

export { router };
