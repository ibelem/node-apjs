'use strict';
/* global process */

const net = require('net'),

server = net.createServer(function(connection){
	console.log('Subscriber connected.');
	connection.write(
		'{"type":"changed", "file":"targ'
		);
	
	let timer = setTimeout(function(){
		connection.write(
			'et.txt", "timestamp":1358175758495}' + '\n');
	}, 1000);
	
	connection.on('end', function(){
		clearTimeout(timer);
		console.log('Subscriber disconnected.');
	});
}); 

server.listen(8008, function(){
	console.log('Listening for subscribers...');
});