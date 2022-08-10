"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker_threads_1 = require("worker_threads");
var i = 0;
setInterval(function () {
    var currentDate = new Date();
    worker_threads_1.parentPort.postMessage("".concat(currentDate.toLocaleTimeString()));
    i++;
    if (i > 5) {
        throw new Error('Finished');
    }
}, 1000);
