import express from 'express';
import { registerDrivingController } from '../dependencies';

const drivingRouter = express.Router();

drivingRouter.post('/', (req, res) => registerDrivingController.run(req, res));

export { drivingRouter };