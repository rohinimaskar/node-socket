

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use("/bower_components", express.static(__dirname + "/bower_components"));

http.listen(3000, function() {
    console.log('server is running on http://localhost:3000');
});


io.on('connection', function(socket) {
    socket.on('MyMessage', function(msg) {
		io.emit('MyMessage', msg);
        console.log("Message received");
		console.log("Message content:");
		console.log(msg);
    });
});

