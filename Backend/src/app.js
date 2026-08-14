import express from "express";
const app = express(); // Create an Express App

app.use(express.json()); // Middleware to parse incoming JSON requests

//Routes import
import userRouter from './routes/userRoute.js';

//Use the routes --Router Declaration
app.use('/users', userRouter);
// app.use('/posts', postRouter);
//example: POST http://localhost:8000/users/register
//example: POST http://localhost:8000/users/login
    
export default app;
