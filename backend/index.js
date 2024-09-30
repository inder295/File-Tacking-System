const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const mongoose = require("mongoose");
const authRoute=require("./routes/auth")
const file=require("./routes/files")

const app=express();
dotenv.config();

app.use(cors());
app.use(express.json());


app.use("/api/v1/auth",authRoute);
app.use("/api/v1/files",file);



const DB=process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("DB is successfully connected");
}).catch((err)=>{
    console.log(err)
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
})