export interface ICalculationService {
    calculateDistance(start_coordinates: string, end_coordinates: string): Promise<number>;
    calculateDuration(start_datetime: Date, end_datetime: Date): string;
}