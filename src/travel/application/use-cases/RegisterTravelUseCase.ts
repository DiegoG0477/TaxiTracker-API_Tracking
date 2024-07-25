import { Travel } from "../../domain/entities/Travel";
import { TravelRepository } from "../../domain/TravelRepository";
import { ICalculationService } from "../../domain/services/ICalculationService";

export class RegisterTravelUseCase {
    constructor(
        private travelRepository: TravelRepository,
        private calculationService: ICalculationService
    ) {}

    async execute(travelInput: any): Promise<Travel | null> {
        const startDatetime = new Date(travelInput.start_hour);
        const endDatetime = new Date(travelInput.end_hour);

        const distance: number = await this.calculationService.calculateDistance(travelInput.start_coordinates, travelInput.end_coordinates);
        const duration: string = this.calculationService.calculateDuration(startDatetime, endDatetime);
        const date_day: string = startDatetime.toISOString().split('T')[0];

        const travel = new Travel(
            travelInput.driver_id as string,
            date_day,
            startDatetime,
            endDatetime,
            travelInput.start_coordinates as string,
            travelInput.end_coordinates as string,
            duration,
            distance
        );

        return this.travelRepository.registerTravel(travel);
    }
}