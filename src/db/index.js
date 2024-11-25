import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_url}/${DB_NAME}`)
        console.log(`MongoDB connected on || Host ${connectionInstance}`)
    } catch (error) {
        console.log(`monngoodb is connection is failed ${error}`)
        process.exit(1)
    }
}

export default connectDB;

