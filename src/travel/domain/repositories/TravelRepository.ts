import { Travel } from "../entities/Travel";

export interface TravelRepository {
    registerTravel(travel: Travel): Promise<Travel | null>;
}