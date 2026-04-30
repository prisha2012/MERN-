const express=require('express');
const app=express();
const path=require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));// helps us use the form
app.use(express.static(path.join(__dirname,"public")));// helps us use the static files like css and js


// install ejs from npm
// setup ejs as the view engine
app.set("view engine","ejs");
// make a folder named views and create a file named index.ejs inside it
app.get("/",function(req,res){
    res.render("index");
});
// app.get turns the app.render to call index.ejs
app.get("/profile/:username",function(req,res){
    // to get the username from the url
    res.send(`welcome, ${req.params.username}`);// to get the username from the url we use req.params.username
});
//to make the url dynamic we use :name
app.listen(8000,function(){
    console.log("server is running on port 8000");
});
