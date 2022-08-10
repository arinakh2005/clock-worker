const { Worker } = require("worker_threads");
const worker1 = new Worker("./src/workers/clock.js");

worker1.on("error", (err) => {
    console.error(err);
});

worker1.on("exit", () => {
    console.log('Worker exited')
});

worker1.on("message", time => {
    console.log(time)
});

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
