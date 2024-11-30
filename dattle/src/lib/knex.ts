import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const dbConfig: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "your_password",
    database: process.env.DB_NAME || "your_database",
  },
};

const db = knex(dbConfig);

export default db;
