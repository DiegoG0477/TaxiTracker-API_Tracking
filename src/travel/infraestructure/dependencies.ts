import { RegisterTravelUseCase } from "../application/use-cases/RegisterTravelUseCase";
import { ControllerErrorUseCase } from "../../shared/use-cases/ControllerErrorUseCase";

import { RegisterTravelController } from "./controllers/RegisterTravelController";

import { MysqlTravelRepository } from "./adapters/MysqlTravelRepository";

import { CalculationService } from "./services/CalculationService";

const mysqlTravelRepository = new MysqlTravelRepository();
const calculationService = new CalculationService();

const controllerErrorUseCase = new ControllerErrorUseCase();
const registerTravelUseCase = new RegisterTravelUseCase(mysqlTravelRepository, calculationService);

export const registerTravelController = new RegisterTravelController(registerTravelUseCase, controllerErrorUseCase);