import { parentPort } from 'worker_threads';

let i: number = 0;

setInterval(() => {
    let currentDate: Date = new Date();
    parentPort.postMessage(`${currentDate.toLocaleTimeString()}`);
    i++;

    if (i > 5) {
        throw new Error('Finished');
    }
}, 1000);
