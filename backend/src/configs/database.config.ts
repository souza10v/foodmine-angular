import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();  // Ensure this is at the top

export const dbConnect = () => {
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is not defined in the environment variables");
        return;
    }

    connect(process.env.MONGO_URI!).then(
        () => console.log("Connected successfully"),
        (error) => console.log(error)
    );
}
