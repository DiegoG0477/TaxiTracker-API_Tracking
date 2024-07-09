import { Request, Response } from "express";
import { UpdateLocationUseCase } from "../../application/use-cases/UpdateLocationUseCase";
import { Geolocation } from "../../domain/entities/Geolocation";

export class UpdateLocationController{
    constructor(
        private updateLocationUseCase: UpdateLocationUseCase
    ){}

    async run(req: Request, res: Response): Promise<void>{
        const data: Geolocation = req.body;
        await this.updateLocationUseCase.execute(data);
        res.status(200).send({
            message: 'Location updated successfully',
        });
    }
}