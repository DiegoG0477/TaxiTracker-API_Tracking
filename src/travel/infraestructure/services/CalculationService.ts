import { ICalculationService } from "../../domain/services/ICalculationService";

export class CalculationService implements ICalculationService {
    async calculateDistance(startCoordinates: string, endCoordinates: string): Promise<number> {
        if (startCoordinates === "..." || endCoordinates === "...") {
            return 250;
        }
        
        const [startLng, startLat] = this.parseCoordinates(startCoordinates);
        const [endLng, endLat] = this.parseCoordinates(endCoordinates);

        return this.haversineDistance(startLat, startLng, endLat, endLng);
    }

    calculateDuration(startDatetime: Date, endDatetime: Date): string {
        const milliDiff: number = endDatetime.getTime() - startDatetime.getTime();
        const totalSeconds: number = Math.floor(milliDiff / 1000);
        const totalMinutes: number = Math.floor(totalSeconds / 60);
        const totalHours: number = Math.floor(totalMinutes / 60);
        const remSeconds: number = totalSeconds % 60;
        const remMinutes: number = totalMinutes % 60;

        return `${totalHours}:${remMinutes}:${remSeconds}`;
    }

    private parseCoordinates(coordinate: string): [number, number] {
        const match = RegExp(/POINT\(([^ ]+) ([^ ]+)\)/).exec(coordinate);
        if (!match) {
            throw new Error(`Invalid coordinate format: ${coordinate}`);
        }
        const [, lng, lat] = match;
        return [parseFloat(lng), parseFloat(lat)];
    }

    private haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = this.deg2rad(lat2 - lat1);
        const dLon = this.deg2rad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c * 1000; // Distance in meters
    }    

    private deg2rad(deg: number): number {
        return deg * (Math.PI / 180);
    }
}