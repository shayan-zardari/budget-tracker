import { config } from "dotenv";

config({
    path: `.env.${process.env.NODE_ENV || "development"}.local`
});

export const {DB_CONNECTION_STRING, NODE_ENV, PORT} = process.env;

// nodejs process specifiction // metadata 