import { ISocketService } from "../../application/services/ISocketService";
import { SocketioAdapter } from "../../../shared/socket/socketioAdapter";
import { Geolocation } from "../../domain/entities/Geolocation";

export class SocketService implements ISocketService {
    private socketioAdapter: SocketioAdapter;

    constructor() {
        this.socketioAdapter = new SocketioAdapter();
    }

    async refreshLocation(data: Geolocation): Promise<void> {
        console.log('sending location to client', data);
        this.socketioAdapter.emit("location:refresh", data);
    }
} 