export class Driving {
    constructor(
        readonly kit_id: string,
        readonly driver_id: string,
        readonly travel_id: number,
        readonly datetime: Date, // every 1 minute
        readonly acceleration: number, // m/s2
        readonly deceleration: number, // m/s2
        readonly vibrations: number, // vibrations per minute 
        // can add a vibration frequency parameter by knock sensor
        readonly travel_coordinates: string, // last travel coordinate
    ){}
}