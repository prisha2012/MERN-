const express=require('express');
const app=express();
const userModel=require('./usermodel');

app.get("/",function(req,res){
    res.send("hello world");
})
app.get("/create",async(req,res)=>{
    let createduser= await userModel.create({
        name: "john doe",
        username: "john123 ",
        email: "john@example.com"

    });

    res.json(createduser);
})
app.get("/update",async(req,res)=>{
    let createduser= await userModel.findOneAndUpdate({name: "john"},{name: "jane"},{new: true});
    res.json(createduser);
})
app.get("/read",async(req,res)=>{
    let users=await userModel.find();
    res.json(users);
})
app.get("/delete",async(req,res)=>{
    let deleteduser=await userModel.findOneAndDelete({name: "jane"});
    res.json(deleteduser);
});
app.listen(3000,function(){
    console.log("server is running on port 3000");
});