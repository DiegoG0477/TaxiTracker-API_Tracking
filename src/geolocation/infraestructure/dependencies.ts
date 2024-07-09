import { UpdateLocationUseCase } from "../application/use-cases/UpdateLocationUseCase";

import { UpdateLocationController } from "./controllers/UpdateLocationController";

import { SocketService } from "./adapters/SocketioGeolocationRepository";

const socketService = new SocketService();

const updateLocationUseCase = new UpdateLocationUseCase(socketService);

export const updateLocationController = new UpdateLocationController(updateLocationUseCase);