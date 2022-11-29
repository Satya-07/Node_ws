"use strict";
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
transactions.get('/', function (req, res) {
    res.status(200).json({ 'msg': 'welcome transaction' });
});
transactions.get('/tran', function (req, res) {
    res.status(200).json({ 'msg': 'welcome to tran transaction' });
});
exports["default"] = transactions;
