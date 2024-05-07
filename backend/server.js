import express from "express";
import cors from "cors";
import { connetDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

import 'dotenv/config.js'
import cartRoute from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app cofig
const app = express();
const port = 4000;


// middleware 
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Api working")
})
// connet DB 
connetDb()


// api endpoints 
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRoute);
app.use('/api/order',orderRouter);

app.listen(port,()=>{
    console.log(`server  Startd on http://localhost:${port}`)
})
// mongodb+srv://hanvph35034:<password>@cluster0.yfewu7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://hanvph35034:<password>@cluster0.yfewu7j.mongodb.net/
// mongodb+srv://hanvph35034:<password>@cluster0.yfewu7j.mongodb.net/?