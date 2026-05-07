 const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');



app.use(cookieParser());
app.get("/",function(req,res){
    // // res.cookie("name","harsh")
    // bcrypt.genSalt(10, function(err, salt) {

    // bcrypt.hash("polololo", salt, function(err, hash) {

    //     console.log(hash)

    // });
// });
let token=jwt.sign({email: "new@gmail.com"},"secret");
res.cookie("token",token);
res.send("done")
})
app.get("/read",function(req,res){
    // console.log(req.cookies);
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
//   console.log(req.cookies.token);
})

app.listen(3000,()=>{
    console.log("server is running");
})