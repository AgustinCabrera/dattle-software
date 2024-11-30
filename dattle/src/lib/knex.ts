import knex from "knex";
import config from "../../Knexfile";
import { configDotenv } from "dotenv";

configDotenv();

const enviroment = process.env.NODE_ENV || "development";

const knexInstance = knex(config[enviroment]);

export default knexInstance;
