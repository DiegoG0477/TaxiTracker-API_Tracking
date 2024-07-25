import socketIoClient, { Socket } from "socket.io-client";
import { AuthService } from "../services/AuthService";
import dotenv from "dotenv";

dotenv.config();

export class SocketioAdapter {
    private socket: Socket | undefined;
    private url: string = process.env.SOCKETIO_URL ?? "http://localhost:3000";
    private authService: AuthService = new AuthService();

    constructor() {
        this.connect();
    }

    public async connect(): Promise<void> {
        const secretKey = process.env.SECRET_JWT ?? "secret-key";
        const token = await this.authService.generateToken(secretKey);
        console.log("ws-token", token);

        this.socket = socketIoClient(this.url, {
            auth: {
                token: token,
                kitId: "tracking-api",
            },
        });

        this.socket.on("connect", () => {
            console.log("Socket.IO connection established successfully");
        });

        this.socket.on("connect_error", (error) => {
            console.error("Socket.IO connection error:", error.message);
        });

        this.socket.on("disconnect", (reason) => {
            console.log("Socket.IO disconnected. Reason:", reason);
        });

        this.socket.on("error", (error) => {
            console.error("Socket.IO error:", error);
        });
    }

    public on(event: string, callback: (data: any) => void): void {
        if (this.socket === undefined) this.connect();
        this.socket?.on(event, callback);
    }

    public emit(event: string, data: any): void {
        console.log("Emitting event to URL:", this.url);
        if (this.socket === undefined) {
            console.warn("Socket is undefined. Attempting to reconnect...");
            this.connect();
        }
        if (this.socket?.connected) {
            this.socket.emit(event, data);
            console.log(`Event '${event}' emitted successfully`);
        } else {
            console.error("Failed to emit event. Socket is not connected.");
        }
    }

    public disconnect(): void {
        if (this.socket === undefined) {
            console.warn("Attempted to disconnect, but socket is undefined");
            return;
        }
        this.socket.disconnect();
        console.log("Socket disconnected manually");
    }
}
