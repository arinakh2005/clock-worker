const { parentPort } = require( "worker_threads");

let i = 0;

setInterval(() => {
    let currentDate = new Date();
    parentPort.postMessage(`${currentDate.toLocaleTimeString()}`);
    i++;
    if (i > 5) {
        throw new Error('Finished');
    }
}, 1000);
