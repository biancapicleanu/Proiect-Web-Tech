import express from "express";
import * as mpsController from "../controllers/mp.js";

const router = express.Router();

router.post("/", mpsController.createMP);
router.get("/", mpsController.getAllMPs);

export { router };
