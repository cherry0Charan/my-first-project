const express=require("express");
const cors=require("cors");

const app=express();

var corOptions={
    origin:"http://localhost:8080"
}
//middle wares

app.use(express.json());

app.use(express.urlencoded({extended:true}));


//routing
const router=require("./routes/productRoute.js");

app.use("/api/products",router)


app.get("/",(req,res)=>{
    res.json({message:"hello world"})
})

const PORT=process.env.PORT || 8080

//server
app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})