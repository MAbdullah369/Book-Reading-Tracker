const express = require("express");
// const page = require("page");

const app = express();

app.get("/register",(req,res)=>{
    res.send("Book Tracking"); 
    console.log("register page");
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});