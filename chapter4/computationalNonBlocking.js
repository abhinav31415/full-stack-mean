let childProcess = require('child_process');

console.log(1);
let newProcess = childProcess.spawn('node', ['./_fibonacci'], {
    stdio: 'inherit'
});
console.log(2);