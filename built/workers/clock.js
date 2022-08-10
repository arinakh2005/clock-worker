var parentPort = require("worker_threads").parentPort;
var i = 0;
setInterval(function () {
    var currentDate = new Date();
    parentPort.postMessage("".concat(currentDate.toLocaleTimeString()));
    i++;
    if (i > 5) {
        throw new Error('Finished');
    }
}, 1000);
