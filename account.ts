import * as express from "express";
var account:any=express.Router();
account.get('/',(req:any,res:any):any =>{
    res.status(200).json({'message':'welcome to account'})
});

account.post('/',(req:any,res:any):any =>{
    res.status(200).json({'message':'post method of account'})
})

export default account;
