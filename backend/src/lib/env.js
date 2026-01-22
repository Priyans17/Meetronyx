import dotenv from "dotenv";

dotenv.config(); //to load the .env file and make the variables available in process.env

export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}