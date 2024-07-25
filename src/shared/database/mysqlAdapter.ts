import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { Signale } from "signale";

dotenv.config();
const signale = new Signale();

const DB_PORT = parseInt(process.env.DB_PORT ?? '3306', 10);

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
};

// Crear el pool de conexiones
const pool = mysql.createPool(config);

export async function query(sql: string, params: any[]) {
  try {
    const conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");
    const result = await conn.execute(sql, params);
    conn.release();
    return result;
  } catch (error) {
    signale.error(error);
    return null;
  }
}