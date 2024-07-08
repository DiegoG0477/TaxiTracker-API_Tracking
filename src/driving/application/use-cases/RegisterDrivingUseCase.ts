import { Driving } from "../../domain/entities/Driving";
import { DrivingRepository } from "../../domain/DrivingRepository";

export class RegisterDrivingUseCase {
    constructor(
        private drivingRepository: DrivingRepository
    ){}

    async execute(driving: Driving): Promise<Driving | null> {
        return this.drivingRepository.registerDriving(driving);
    }
}