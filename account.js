"use strict";
exports.__esModule = true;
var express = require("express");
var account = express.Router();
account.get('/', function (req, res) {
    res.status(200).json({ 'message': 'welcome to account' });
});
account.post('/', function (req, res) {
    res.status(200).json({ 'message': 'post method of account' });
});
exports["default"] = account;
