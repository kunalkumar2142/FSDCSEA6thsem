const http=require('http');
const sum=require('./fetchAPI')
const {readData, writeData,deleteData} = require('./usefsmodule')
const PORT=4002;
 const server=http.createServer(async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");

// res.setHeader=('Content-Type','application/json');
// // res.end('<h2>Welcome to node server</h2>')
// res.end(JSON.stringify({msg:"Welcome to node server"}))

if(req.url=='/msg' && req.method=="GET"){
    res.setHeader('Content-Type','text/html')
    res.end("<h2>Greeting of the day</h2>")
}
else if(req.url=="/data" && req.method=="GET"){
    
    res.setHeader('Content-Type','application/json')
    const data=await sum();
    res.end(JSON.stringify({msg:data}))
}

else if(req.url=="/datawrite" && req.method=="GET"){
    
    res.setHeader('Content-Type','application/json')
    const data=writeData();
    res.end(JSON.stringify({msg:data}))
}

else if(req.url=="/dataread" && req.method=="GET"){
    
    res.setHeader('Content-Type','application/json')
    const data=readData();
    res.end(JSON.stringify({msg:data}))
}

else{
    res.setHeader('Content-Type','text/html')
    res.end("<h2>Invalid end point</h2>")

}

 })
 server.listen(PORT,()=>{
    console.log("Server is running on"+PORT)
 })