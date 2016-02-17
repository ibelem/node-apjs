'use strict';

const
	fs = require('fs'), 
	zmq = require('zmq'),
	
	publisher = zmq.socket('pub'),
	filename = process.argv[2];
	
fs.watch(filename, function(){
	publisher.send(JSON.stringify({
		type: 'changed',
		file: filename,
		timestamp: Date.now()
	}));
});

if(!filename){
	throw Error('No target filename was specified.');
}

publisher.bind('tcp://*:8008', function(err){
	console.log('Listening for zmq subscribers...');
});
	