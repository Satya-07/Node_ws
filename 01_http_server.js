// HTTP server
let http=require("http");
let url=require("url")

let server=http.createServer((req,res)=>{
    //MIME type
    // res.writeHead(200,{content})
    res.writeHead(200,{"Content-type":"text/html"});
    let obj=url.parse(req.url,true).query;
    if (obj.uname==="satya" && obj.upwd==="satya@123"){
        res.write("<h1>yes</h1>")
    }
    else{
        res.write("<h1>no</h1>")
    }
    res.end();
});
server.listen(8080);
console.log("yup");