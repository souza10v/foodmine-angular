import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken"
import foodRouter from './routers/food.router'
import userRouter from "./routers/user.router";

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));


app.use("/api/foods", foodRouter);
app.use("/api/user", userRouter)

const port = 5001;
app.listen(port, () => {
    console.log("Website served on the http://localhost:" + port);
})

