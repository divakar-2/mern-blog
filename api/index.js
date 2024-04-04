import  express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './route/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Mongodb is connected');
}).catch((err)=>{
    console.log(err);
});

const app=express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.use('/api/user',userRoute)

