var g = require(var g = require('http');
g.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is my first look on nodejs and java script\n');
	}).listen(138, "127.0.0.1");
	console.log('running');
	
