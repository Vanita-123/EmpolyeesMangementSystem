import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({
    path:"./.env",
})
const databaseConnect = process.env.MongoDB_URL;
const Connection =async()=>{

    try {
        await mongoose.connect(databaseConnect)
        console.log("MongoDb connected")
    } catch (error) {
        console.log(`Mongodb it is not connected ${error}` )
    }
}
Connection();


export default  databaseConnect;