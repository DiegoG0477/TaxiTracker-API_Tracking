export class Travel {
    constructor(
        readonly kit_id: string,
        readonly driver_id: string,
        readonly start_datetime: Date,
        readonly end_datetime: Date,
        readonly start_coordinates: string,
        readonly end_coordinates: string,
        readonly duration: string,// hh:mm:ss
        readonly distance: number, //meters
        //add this changes to te database
    ){}
}