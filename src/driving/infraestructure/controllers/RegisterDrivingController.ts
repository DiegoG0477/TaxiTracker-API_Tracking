import { Request, Response } from 'express';
import { RegisterDrivingUseCase } from '../../application/use-cases/RegisterDrivingUseCase';
import { ControllerErrorUseCase } from '../../../shared/use-cases/ControllerErrorUseCase';
import { Driving } from '../../domain/entities/Driving';

export class RegisterDrivingController {
    constructor(
        readonly registerDrivingUseCase: RegisterDrivingUseCase,
        readonly controllerErrorUseCase: ControllerErrorUseCase
    ){}

    async run(req: Request, res: Response) {
        const driving: Driving = req.body;
        try {
            console.log('received driving data:', driving);
            const registeredDriving = await this.registerDrivingUseCase.execute(driving);

            if (registeredDriving) {
                res.status(201).send({
                    status: 'success',
                    message: 'Driving data registered',
                    registeredDriving,
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'Driving data not registered',
                    registeredDriving,
                });
            }
        } catch (error: any) {
            ControllerErrorUseCase.handle(error, res);
        }
    }
}