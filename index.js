const http =require('http');
const fs =require('fs');
const url = require("url");

const MyServer=http.createServer((req,res)=>{
    if(req.url ==="/favicon.ico")return res.end();
       const log =`${Date.now()} :${req.url} New Request received\n`;
       const myUrl = url.parse(req.url,true);
       console.log(myUrl);
       fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/": res.end("Home Page ")
            break;
            case "/about": 
            const username = myUrl.query.myname
            res.end(  `This is about page and hi ${username}`)
            break;
            default: res.end("404 error ... OPPS page not found ")
        }
       })
})

MyServer.listen(4000,()=>{
    console.log("My server is started")
})