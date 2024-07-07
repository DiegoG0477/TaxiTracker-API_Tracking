import { RegisterCrashUseCase } from "../application/use-cases/RegisterCrashUseCase";
import { ControllerErrorUseCase } from "../../shared/use-cases/ControllerErrorUseCase";

import { RegisterCrashController } from "../infraestructure/controllers/RegisterCrashController";

import { MysqlCrashRepository } from "../infraestructure/adapters/MysqlCrashRepository";

const mysqlCrashRepository = new MysqlCrashRepository();

const controllerErrorUseCase = new ControllerErrorUseCase();
const registerCrashUseCase = new RegisterCrashUseCase(mysqlCrashRepository);

export const registerCrashController = new RegisterCrashController(registerCrashUseCase, controllerErrorUseCase);