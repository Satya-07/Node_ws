
import * as express from "express";

var transactions:any=express.Router();

transactions.get('/',(req:any,res:any):any =>{
    res.status(200).json({'msg':'welcome transaction'})
});

transactions.get('/tran',(req:any,res:any):any =>{
    res.status(200).json({'msg':'welcome to tran transaction'})
});


export default transactions;