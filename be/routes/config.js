import express from "express";
import { router as bugRouter } from "./bug.js";
import { router as mpRouter } from "./mp.js";
import { router as projectRouter } from "./project.js";
import { router as tstRouter } from "./tst.js";
import { router as userRouter } from "./user.js";

export const router = express.Router();

router.use("/bugs", bugRouter);
router.use("/mps", mpRouter);
router.use("/tsts", tstRouter);
router.use("/projects", projectRouter);
router.use("/users", userRouter);
