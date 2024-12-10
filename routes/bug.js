import express from "express";
import * as bugsController from "../controllers/bug.js";

const router = express.Router();

router.post("/", bugsController.createBug);

router.put("/:bugId/allocateMp", bugsController.allocateMpToBug);

export { router };
