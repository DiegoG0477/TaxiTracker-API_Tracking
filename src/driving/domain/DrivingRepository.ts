import { Driving } from "./entities/Driving";

export interface DrivingRepository {
    registerDriving(driving: Driving): Promise<Driving | null>;
    // getDrivings(): Promise<Driving[] | null>;
    // getDrivingsByDriverId(driver_id: string): Promise<Driving[] | null>;
    // getDrivingsByDriverIdAndTimelapse(driver_id: string, start: Date, end: Date): Promise<Driving[] | null>;
    // getDrivingsByKitId(kit_id: string): Promise<Driving[] | null>;
}