/* global process */
const fs = require('fs'), filename = process.argv[2];

if(!filename) { 
	throw Error('Please specify a file to watch.'); 
}

fs.watch(filename, function(){
	console.log('File ' + filename + ' just changed!');
});

console.log('Now watching ' + filename + ' for changes');