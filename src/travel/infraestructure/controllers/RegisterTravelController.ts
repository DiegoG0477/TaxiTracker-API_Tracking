import { RegisterTravelUseCase } from "../../application/use-cases/RegisterTravelUseCase";
import { ControllerErrorUseCase } from "../../../shared/use-cases/ControllerErrorUseCase";

export class RegisterTravelController{
    constructor(
        readonly registerTravelUseCase: RegisterTravelUseCase,
        readonly controllerErrorUseCase: ControllerErrorUseCase
    ){}

    async run(req: any, res: any){
        const travelInput: any = req.body;
        try{
            console.log('received trvel data:', travelInput);
            const registeredTravel = await this.registerTravelUseCase.execute(travelInput);
            if(registeredTravel){
                res.status(201).send({
                    status: 'success',
                    message: 'Travel data registered',
                    registeredTravel,
                });
            }else{
                res.status(400).send({
                    status: 'error',
                    message: 'Travel data not registered',
                    registeredTravel,
                });
            }
        }catch(error: any){
            ControllerErrorUseCase.handle(error, res);
        }
    }
}