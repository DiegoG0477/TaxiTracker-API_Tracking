export class Driving {
    constructor(
        readonly kit_id: string,
        readonly driver_id: string,
        readonly travel_id: number,
        readonly datetime: Date, // every 30 seconds
        readonly acceleration: number, // m/s2
        readonly deceleration: number, // m/s2
        readonly vibrations: number, // vibrations per minute 
        readonly travel_coordinates: string, // last travel coordinate
        readonly inclination_angle: number, // degrees
        readonly angular_velocity: number, // degrees/s
        readonly g_force_x: number, // g-force
        readonly g_force_y: number, // g-force
    ){}
}