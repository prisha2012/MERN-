const express=require('express');
const app=express();
const userModel=require("./models/user");
const postModel=require("./models/post");
app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/create",async(req,res)=>{
    let user= await userModel.create({
        username: "harsh",
        age: 25,
        email: "harsh@gmail.com"
    });
    res.send(user);
})
app.get("/post/create",async(req,res)=>{
   let post=await postModel.create({
    postdata: "hello",
    user: "iuhiufgr89y4ub4"
   })
   let user=await userModel.findOne({_id:"iuhiufgr89y4ub4" });
   user.posts.push(post._id);
   await user.save()
   res.send(post,user);
})
app.listen(3000,()=>{
    console.log("server is running...");
})