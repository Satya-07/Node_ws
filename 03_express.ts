// import express module
import * as express from "express";

const app:any = express();

app.get('/',(req:any,res:any):any=>{
    res.status(200).json({'msg':'welcome'});
});

app.listen(3000)