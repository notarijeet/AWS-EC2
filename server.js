import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"hello"
    })
})

app.get("/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"health api is working"
    })
})

app.listen(PORT,"127.0.0.1",()=>{
    console.log(`Server running on PORT ${PORT}`)
})