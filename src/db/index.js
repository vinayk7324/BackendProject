// require('dotenv').config({path:'./env'})
import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{

    try{    

       const connectionInstance =  await mongoose.connect(`${process.env.MONGOS_URL}/${DB_NAME}`) //check connectionInstace
       console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`);

    }catch(error){
        console.log("MONGODB connection error hi ",error);
        process.exit(1)

    }
}

export default connectDB;