import  express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './route/user.route.js'
import authRoute from './route/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Mongodb is connected');
}).catch((err)=>{
    console.log(err);
});

const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.use('/api/user',userRoute);

app.use('/api/auth',authRoute);