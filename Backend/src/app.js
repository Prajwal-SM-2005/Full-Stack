import express from "express";
const app = express(); // Create an Express App

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

export default app;