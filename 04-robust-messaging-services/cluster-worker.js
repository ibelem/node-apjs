'use strict';

const cluster = require('cluster');

if(cluster.isMaster) {
	for(let i=0; i<10; i++){
		cluster.fork();
	}
	
	cluster.on('online', function(worker){
		console.log('Worker ' + worker.process.id + ' is online.');
	});
	
	cluster.on('exit', function(workder, code, signal){
		console.log('Worker ' + workder.process.id + ' exited with code ' + code);
	});

} else {
	console.log('Worker process to do works...')
}

 
