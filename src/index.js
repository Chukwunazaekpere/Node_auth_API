import express from "express";
const server = express();

import connectDB from "./config/db.js";
import bankingRoute from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env"});
server.use(express.json());

server.use("/api/banking", bankingRoute);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    connectDB()
    console.log(`\n\t Server started and running at PORT: ${PORT}...`)
})
