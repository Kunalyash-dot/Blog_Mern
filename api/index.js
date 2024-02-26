import express from 'express'
import mongosee from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongosee.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB is Connected")
}).catch((err)=>{
console.log(err);
});

const app=express()

app.use(express.json());
app.listen(3000,()=>{
    console.log("Listening on Port 3000");
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});