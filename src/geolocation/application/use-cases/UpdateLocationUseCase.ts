import { ISocketService } from "../services/ISocketService";
import { Geolocation } from "../../domain/entities/Geolocation";

export class UpdateLocationUseCase{
    constructor(
        private socketService: ISocketService
    ){}

    async execute(data: Geolocation): Promise<void>{
        await this.socketService.refreshLocation(data);
    }
}