import express from "express";
import { registerTravelController } from "../dependencies";

const travelRouter = express.Router();

travelRouter.post("/", (req, res) => registerTravelController.run(req, res));

export { travelRouter };