import express from "express";
import * as tstsController from "../controllers/tst.js";

const router = express.Router();

router.post("/", tstsController.createTST);

export { router };