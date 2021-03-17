import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./src/config/config.env"})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("\n\t Database connected successfully.");
    } catch (error) {
        console.log("\n\t Database is inaccessible: ", error.message);
    }

}

// MONGO_URI = mongodb+srv://Chukwunazaekpere:Chemmaco1993@authentification.cu4aa.mongodb.net/Users?retryWrites=true&w=majority
const db = mongoose.connection
export default connectDB;