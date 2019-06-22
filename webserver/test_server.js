'use strict'

var http = require('http');
var https = require('https');
var fs = require('fs');

var serveIndex = require('serve-index');

var express = require('express');
var app = express();

//顺序不能换
app.use(serveIndex('./public'));
app.use(express.static('./public'));

var options = {
	key: fs.readFileSync('./cert/2_www.mcyyx.com.key'),
	cert: fs.readFileSync('./cert/1_www.mcyyx.com_bundle.crt'),
}
var https_server = https.createServer(options, app);
https_server.listen(1443, '0.0.0.0');

var http_server = http.createServer(app);
http_server.listen(80, '0.0.0.0');


