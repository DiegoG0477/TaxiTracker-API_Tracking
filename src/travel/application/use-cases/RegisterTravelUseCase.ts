import { Travel } from "../../domain/entities/Travel";
import { TravelRepository } from "../../domain/TravelRepository";
import { ICalculationService } from "../../domain/services/ICalculationService";

export class RegisterTravelUseCase {
    constructor(
        private travelRepository: TravelRepository,
        private calculationService: ICalculationService
    ) {}

    async execute(travelInput: any): Promise<Travel | null> {
        const distance: number = await this.calculationService.calculateDistance(travelInput.start_coordinates, travelInput.end_coordinates);
        const duration: string = this.calculationService.calculateDuration(travelInput.start_hour, travelInput.end_hour);
        const date_day: string = travelInput.start_hour.toISOString().split('T')[0];

        const travel = new Travel(
            travelInput.driver_id as string,
            date_day,
            travelInput.start_hour as Date,
            travelInput.end_hour as Date,
            travelInput.start_coordinates as string,
            travelInput.end_coordinates as string,
            duration,
            distance
        );

        return this.travelRepository.registerTravel(travel);
    }
}