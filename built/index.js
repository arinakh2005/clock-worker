"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker_threads_1 = require("worker_threads");
function runWorker() {
    var worker1 = new worker_threads_1.Worker("../built/workers/clock.js");
    worker1.on("error", function (err) {
        console.error(err);
    });
    worker1.on("exit", function () {
        console.log('Worker exited');
    });
    worker1.on("message", function (time) {
        console.log(time);
    });
}
// worker2.on("error", (err) => {
//     console.error(err);
// });
//
// worker2.on("exit", () => {
//     console.log('Worker exited')
// });
//
// worker2.on("message", msg => {
//     console.log(msg)
// });
