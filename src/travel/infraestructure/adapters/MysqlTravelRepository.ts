import { query } from "../../../shared/database/mysqlAdapter";
import { Travel } from "../../domain/entities/Travel";
import { TravelRepository } from "../../domain/TravelRepository";

export class MysqlTravelRepository implements TravelRepository {
    async registerTravel(travel: Travel): Promise<Travel | null> {
        let travelResult: any = null;
        const queryStr: string = 'CALL registerTravelData(?, ?, ?, ?, ?, ?, ?, ?)';
        const values: any[] = [travel.kit_id, travel.driver_id, travel.start_datetime, travel.end_datetime, travel.start_coordinates, travel.end_coordinates, travel.duration, travel.distance];

        try {
            const [result]: any = await query(queryStr, values);

            travelResult = new Travel(
                travel.kit_id,
                travel.driver_id,
                travel.start_datetime,
                travel.end_datetime,
                travel.start_coordinates,
                travel.end_coordinates,
                travel.duration,
                travel.distance
            );

            if(result.affectedRows === 0) {
                travelResult = null;
            }
            
        } catch (error: any) {
            console.error(error);
            travelResult = null;
        } finally {
            return travelResult;
        }
    }
}