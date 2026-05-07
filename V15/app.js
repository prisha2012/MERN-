const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const path=require('path');
const userModel=require("./models/user");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const user = require('./models/user');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.render('index');
})
app.post("/create",(req,res)=>{
    let{username,email,password,age}=req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
           
         let createduser=await userModel.create({
               username,
               email,
               password: hash,
               age
           })
           let token=jwt.sign({email},"shhhhhhh");
           res.cookie("token",token);
           res.send(createduser);
        })
    })
})
app.get("/login",(req,res)=>{
    res.render('login');
})
app.post("/login",async (req,res)=>{
    let userlogin= await userModel.findOne({email:req.body.email});
    if(!userlogin) return res.send("something went wrong");
    bcrypt.compare(req.body.password,userlogin.password,(err,result)=>{
        if(result) {
             let token=jwt.sign({email: userlogin.email},"shhhhhhh");
           res.cookie("token",token);
            res.send("yes u can login");}
        else  res.send("no u can not login");
       
    })
});

app.get("/logout",(req,res)=>{
    res.cookie("token","");
})
app.listen(3000,()=>{
    console.log("server is running");
})
