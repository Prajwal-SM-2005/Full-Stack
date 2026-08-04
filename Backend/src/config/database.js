import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

// Async in JS we use this when we want some task to finish before continuing.
const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;

        if (!mongoUri) {
            throw new Error("MONGODB_URI is not defined. Add it to your .env file.");
        }

        const connectionInstance = await mongoose.connect(mongoUri, { dbName: DB_NAME });
        console.log("\nMongoDB connected successfully to:", connectionInstance.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;