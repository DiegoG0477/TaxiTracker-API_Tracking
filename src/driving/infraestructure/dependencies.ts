import { RegisterDrivingUseCase } from "../application/use-cases/RegisterDrivingUseCase";
import { ControllerErrorUseCase } from "../../shared/use-cases/ControllerErrorUseCase";

import { RegisterDrivingController } from "../infraestructure/controllers/RegisterDrivingController";

import { MysqlDrivingRepository } from "./adapters/MysqlDrivingRepository";

const mysqlDrivingRepository = new MysqlDrivingRepository();

const controllerErrorUseCase = new ControllerErrorUseCase();
const registerDrivingUseCase = new RegisterDrivingUseCase(mysqlDrivingRepository);

export const registerDrivingController = new RegisterDrivingController(registerDrivingUseCase, controllerErrorUseCase);