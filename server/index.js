const express=require("express")
const cors =require("cors")
const path=require("path")


const PORT=3001

const app=express()
app.use(cors())
app.get("/api",(req,res)=>{
    res.json({Message:"hello from server"})
})

app.listen(PORT,()=>{
    console.log("it is listing")
})