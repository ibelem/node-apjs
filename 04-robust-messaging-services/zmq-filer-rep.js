'use strict';

const
	fs = require('fs'), 
	zmq = require('zmq'),
	
	responder = zmq.socket('rep');

responder.on('message', function(data){
	let request = JSON.parse(data);
	console.log('Received request to get: ' + request.path);
	
	fs.readFile(request.path, function(err, content){
		console.log('Sending response content');
		responder.send(JSON.stringify({
			content: content.toString(),
			timestamp: Date.now(),
			pid: process.pid
		}));
	});
});
	
responder.bind('tcp://*:8008', function(err){
	console.log('Listening for zmq requesters...');
});

process.on('SIGINT', function(){
	console.log('Shutting down...');
	responder.close();
});
	