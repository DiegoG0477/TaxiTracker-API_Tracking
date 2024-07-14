import socketIoClient, { Socket } from "socket.io-client";
import { AuthService } from "../services/AuthService";

export class SocketioAdapter {
    private socket: Socket | undefined;
    private url: string = process.env.SOCKETIO_URL ?? "http://localhost:3000";
    private authService: AuthService = new AuthService();

    constructor() {
        this.connect();
    }

    public connect(): void {
        this.socket = socketIoClient(this.url, {
            transports: ['websocket'],
            upgrade: false ,
            auth: {
                token: this.authService.generateToken('secret-key')
            }
        });
    }

    public on(event: string, callback: (data: any) => void): void {
        if(this.socket === undefined) this.connect();
        this.socket?.on(event, callback);
    }

    public emit(event: string, data: any): void {
        console.log('url', this.url);
        if(this.socket === undefined) this.connect();
        this.socket?.emit(event, data);
    }

    public disconnect(): void {
        if(this.socket === undefined) return;
        this.socket.disconnect();
    }
}