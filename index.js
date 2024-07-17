const http = require("http");
const express =require("express");

const app =express();

app.get("/",(req,res)=>{
  res.send("Hello from Home page ");
});
app.get("/about",(req,res)=>{
  res.send("Hello from About page " );
});


app.listen(4000, () => {
  console.log("My server is started");
});
