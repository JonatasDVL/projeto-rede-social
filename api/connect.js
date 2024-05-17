import mysql from "mysql2"
import dotenv from "dotenv"

// dotenv possibilita ler variaveis de um arquivo que tem dados sigilosos
dotenv.config({path: "./.env"})

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
})