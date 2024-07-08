import { ICalculationService } from "../../domain/services/ICalculationService";

export class CalculationService implements ICalculationService {
    async calculateDistance(startCoordinates: string, endCoordinates: string): Promise<number> {
        return 0;
        // implement this with python and a aws lambda function
    }
    
    calculateDuration(startDatetime: Date, endDatetime: Date): string {
        // Time Difference in Milliseconds
        const milliDiff: number = endDatetime.getTime() - startDatetime.getTime();
        // Converting time into hh:mm:ss format

        // Total number of seconds in the difference
        const totalSeconds: number = Math.floor(milliDiff / 1000);

        // Total number of minutes in the difference
        const totalMinutes: number = Math.floor(totalSeconds / 60);

        // Total number of hours in the difference
        const totalHours: number = Math.floor(totalMinutes / 60);

        // Getting the number of seconds left in one minute
        const remSeconds: number = totalSeconds % 60;

        // Getting the number of minutes left in one hour
        const remMinutes: number = totalMinutes % 60;

        const duration: string = `${totalHours}:${remMinutes}:${remSeconds}`;

        return duration;
    }
}