
import { DB_CONNECTION_STRING } from "./env.configure.js";
import mongoose from "mongoose";

const DB_Connect = async () => {
    try {
        await mongoose.connect(DB_CONNECTION_STRING);
        console.log(`DB is connected!\n`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

export default DB_Connect;

//node import -> require("")