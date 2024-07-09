import express from "express";
import { updateLocationController } from "../dependencies";

const geolocationRouter = express.Router();

geolocationRouter.post("/", (req, res) => updateLocationController.run(req, res));

export { geolocationRouter };