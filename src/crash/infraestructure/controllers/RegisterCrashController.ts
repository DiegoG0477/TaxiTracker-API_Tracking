import { Request, Response } from "express";
import { RegisterCrashUseCase } from "../../application/use-cases/RegisterCrashUseCase";
import { ControllerErrorUseCase } from "../../../shared/use-cases/ControllerErrorUseCase";
import { Crash } from "../../domain/entities/Crash";

export class RegisterCrashController {
    constructor(
        readonly registerCrashUseCase: RegisterCrashUseCase,
        readonly controllerErrorUseCase: ControllerErrorUseCase
    ) {}

    async run(req: Request, res: Response) {
        const crash: Crash = req.body.data;
        try {
            const registeredCrash = await this.registerCrashUseCase.execute(crash);

            if (registeredCrash) {
                res.status(201).send({
                    status: "success",
                    message: "Crash registered",
                    registeredCrash,
                });
            } else {
                res.status(400).send({
                    status: "error",
                    message: "Crash not registered",
                    registeredCrash,
                });
            }
        } catch (error: any) {
            ControllerErrorUseCase.handle(error, res);
        }
    }
}