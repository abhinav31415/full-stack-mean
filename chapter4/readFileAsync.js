let fs = require('fs');

let onFileLoad = (err, file) => {
    console.log('Got the file');
};

console.log('Going to get a file');
fs.readFile('readFileSync.js', onFileLoad);

console.log('App continues...');