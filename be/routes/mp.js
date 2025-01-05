import express from "express";
import * as mpsController from "../controllers/mp.js";

const router = express.Router();

router.post("/", mpsController.createMP);

export { router };
