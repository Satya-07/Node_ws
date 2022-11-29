"use strict";
exports.__esModule = true;
// import express module
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.status(200).json({ 'msg': 'welcome' });
});
app.listen(3000);
