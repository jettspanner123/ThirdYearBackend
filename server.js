"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_http_1 = require("node:http");
var PrintLine = console.log;
var PORT = 8000;
var HOST = "localhost";
var server = (0, node_http_1.createServer)(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hell Uddeshya Singh");
});
server.listen(PORT, HOST, function () {
    PrintLine("Server running at ".concat(PORT));
});
