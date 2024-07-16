const http =require('http');
const fs =require('fs');

const MyServer=http.createServer((req,res)=>{
       const log =`${Date.now()} :${req.url} New Request received\n`;
       fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/": res.end("Home Page ")
            break;
            case "/about": res.end("This is about page and my name is Palak")
            break;
            default: res.end("404 error ... OPPS page not found ")
        }
       })
})

MyServer.listen(4000,()=>{
    console.log("My server is started")
})