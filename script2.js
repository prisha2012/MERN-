const express=require('express');
const app=express();

app.use(function(req,res,next){
    console.log("middleware 1");
    next();
})
app.use(function(req,res,next){
    console.log("middleware 2");
    next();
})

app.get("/",function(req,res){
    res.send("hello world");
})
app.get("/profile",function(req,res,next){
   // res.send("hello profile");
   return next(new Error("Profile not found"));
})
app.get("/beautiful",function(req,res){
    res.send("hello beautiful");
})
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send("Something went wrong!");
})
app.listen(3000);
