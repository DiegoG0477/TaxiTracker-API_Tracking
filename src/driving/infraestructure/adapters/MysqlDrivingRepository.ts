import { query } from "../../../shared/database/mysqlAdapter";
import { Driving } from "../../domain/entities/Driving";
import { DrivingRepository } from "../../domain/DrivingRepository";
//         const sql = "CALL registerCrash(?, ?, ?, ?, ?)";
//         const params: any[] = [crash.kit_id, crash.driver_id, crash.datetime, crash.impact_force, crash.crash_coordinates];
export class MysqlDrivingRepository implements DrivingRepository {
    async registerDriving(driving: Driving): Promise<Driving | null> {
        let drivingResult: any = null;
        const queryStr: string = 'CALL registerDrivingData(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values: any[] = [driving.kit_id, driving.driver_id, driving.travel_id, driving.datetime, driving.acceleration, driving.deceleration, driving.vibrations, driving.travel_coordinates];

        try {
            const [result]: any = await query(queryStr, values);

            drivingResult = new Driving(
                driving.kit_id,
                driving.driver_id,
                driving.travel_id,
                driving.datetime,
                driving.acceleration,
                driving.deceleration,
                driving.vibrations,
                driving.travel_coordinates,
                driving.inclination_angle,
                driving.angular_velocity,
                driving.g_force_x,
                driving.g_force_y
            );

            if(result.affectedRows === 0) {
                drivingResult = null;
            }
            
        } catch (error: any) {
            console.error(error);
            drivingResult = null;
        } finally {
            return drivingResult;
        }
    }
}