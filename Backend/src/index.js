// If You want the db and app.js it can be written directly in index.js but for better structure we are creating separate files for db and app.js and then importing them in index.js.
// Here in Index.js we write how Our server is going to start
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const startServer = async () => {
     try {
        await connectDB(); // Connect to the database

        app.on("error", (error) => {
            throw(error);
            // console.error("Error starting the server:", err);
            // process.exit(1); // Exit the process with an error code
        });

        app.listen(process.env.PORT||8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        }catch(error){
            console.log("MongoDB connection failed. Server not started.");
            console.error("Error starting the server:", error);
        }
    }

startServer(); // Start the server