const http = require('node:http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home page");
    }else if(req.url == '/about'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("About page");
    }
})
const port = process.env.PORT || 3000; 
server.listen(port,()=>console.log("Server is running ... "));