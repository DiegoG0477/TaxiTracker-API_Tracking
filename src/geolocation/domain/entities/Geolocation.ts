export class Geolocation {
    constructor(
        readonly kit_id: string,
        readonly driver_id: string,
        readonly datetime: Date,
        readonly coordinates: string,
    ){}
}