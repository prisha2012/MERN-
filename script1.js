// const fs=require('node:fs');
// fs.appendFile("hey.txt"," how are you?",function(err){
//     if(err){
//         console.log(err);
        
//     }    else{
//         console.log("file created");
// }
// }
// )
// const fs=require('node:fs');
// fs.rename("hey.txt"," how.txt",function(err){
//     if(err){
//         console.log(err);
        
//     }    else{
//         console.log("file created");
// }
// }
// )
// const fs=require('node:fs');
// fs.unlink(" how.txt",function(err){
//     if(err){
//         console.log(err);
        
//     }    else{
//         console.log("file created");
// }
// }
// )
const http=require('node:http');
const server= http.createServer(function(req,res){
    res.end("hello world");
})
server.listen(3000);