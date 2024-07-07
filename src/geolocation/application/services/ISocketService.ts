import { Geolocation } from "../../domain/entities/Geolocation";

export interface ISocketService {
    refreshLocation(data: Geolocation): Promise<void>;
}