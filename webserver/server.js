'use strict'

var http = require('http');
var https = require('https');
var fs = require('fs');

var express = require('express');
var serveIndex = require('serve-index');

var app = express();
var http_server = http.createServer(app);
http_server.listen(81, '0.0.0.0');

var options = {
key:fs.readFileSync('./cert/'),
cert:fs.readFileSync('./cert/'),
}

var https_server = https.createServer(options, app);
https_server.listen(443, '0.0.0.0');
