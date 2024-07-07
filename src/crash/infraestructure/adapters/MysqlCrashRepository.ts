import { query } from "../../../shared/database/mysqlAdapter";
import { Crash } from "../../domain/entities/Crash";
import { CrashRepository } from "../../domain/CrashRepository";

export class MysqlCrashRepository implements CrashRepository {
    async registerCrash(crash: Crash): Promise<Crash | null> {
        let crashResult = null;
        const sql = "CALL registerCrash(?, ?, ?, ?, ?)";
        const params: any[] = [crash.kit_id, crash.driver_id, crash.datetime, crash.impact_force, crash.crash_coordinates];

        try {
            const [result]: any = await query(sql, params);
            crashResult = new Crash(
                crash.kit_id,
                crash.driver_id,
                crash.datetime,
                crash.impact_force,
                crash.crash_coordinates
            );

            if (result.affectedRows === 0) {
                crashResult = null;
            }
        } catch (error) {
            console.error(error);
            crashResult = null;
        } finally {
            return crashResult;
        }
    }
}