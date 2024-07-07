import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import dotenv from "dotenv";

import { crashRouter } from "./crash/infraestructure/routes/CrashRouter";

dotenv.config();

const PORT = process.env.SERVER_PORT ?? 3000;

const app = express();

const signale = new Signale();

app.use(express.json());
app.use(morgan("dev"));
app.use("/crashes", crashRouter);

app.listen(PORT, async () => {
    signale.success("Server online in port " + PORT);
});