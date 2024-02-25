import express from 'express'
import mongosee from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';

dotenv.config();

mongosee.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB is Connected")
}).catch((err)=>{
console.log(err);
});

const app=express()


app.listen(3000,()=>{
    console.log("Listening on Port 3000");
});

app.use('/api/user',userRouter);