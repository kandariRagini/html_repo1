const ws=require('http');
ws.createServer((req,res)=>{
    res.end("welcome server");
}).listen(1011,()=>{
    console.log("server is running");
});