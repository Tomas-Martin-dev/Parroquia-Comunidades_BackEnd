import express from "express"
import dotenv from "dotenv"
import router from "./router";
import { connectDB } from "./config/db";

// envs
dotenv.config();

// connect DB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/inst", router)

export default app