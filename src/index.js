// require('dotenv').config({path:'./env'});
// import mongoose from "mongoose";
// import { DB_NAME } from './constants';
import connectDB from "./db/index.js";
import env from 'dotenv'

env.config({
    path:'./env'
})





connectDB();






/*
import express from 'express'
const app = express()
;(async ()=>{ //async : if databse is another continent
    try{
       await mongoose.connect(`${process.env.MONGOS_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERRR: ",error);
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port http://localhost:${process.env.PORT}`);
       })

    }catch(error){
        console.error("ERROR",error);
        throw err
    }
})() */