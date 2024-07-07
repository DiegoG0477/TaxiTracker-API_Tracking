import express from 'express';
import { registerCrashController } from '../dependencies';

const crashRouter = express.Router();

crashRouter.post('/', (req, res) => registerCrashController.run(req, res));

export { crashRouter };
