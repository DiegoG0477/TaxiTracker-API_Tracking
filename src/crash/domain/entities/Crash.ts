export class Crash {
    constructor(
        readonly kit_id: string,
        readonly driver_id: string,
        readonly datetime: Date,
        readonly impact_force: number, // g force, replace crash_data
        readonly crash_coordinates: string
    ){}
}