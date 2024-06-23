import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./rotes/user.js";
import videoRoutes from "./rotes/video.js";
import commentsRouts from "./rotes/comments.js";
import subscribeRouts from "./rotes/subscribe.js";
import cors from "cors";
import { Server } from "socket.io";
import path from "path";

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const port = process.env.PORT || 8080;
const CONNECTION_URL = process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017/youtube";
const io = new Server(8000, {
    cors: true,
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

mongoose
    .connect(CONNECTION_URL)
    .then(() => {
        console.log("Connection Successful..");
    })
    .catch((err) => console.log(err));

app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comment", commentsRouts);
app.use("/subscribe", subscribeRouts);

app.listen(port, () => {
    console.log(`Server Running on the Port: ${port}`);
});


