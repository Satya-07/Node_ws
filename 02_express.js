// express
const express=require("express");
const app=express();
// get request
app.get("/",(req,res)=>{
    res.status(200).json({'msg':'welcome'});
});

app.get('/demo',(req,res)=>{
    res.status(200).json({'msg':'demo'});
});

app.post('/',(req,res)=>{
    res.status(200).json({'msg':'post request'});
});

app.post('/demo',(req,res)=>{
    res.status(200).json({'msg':'post for demo'});
});

app.listen(3000,()=>{
    console.log('server started');
});