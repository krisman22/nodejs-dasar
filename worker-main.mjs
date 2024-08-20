import { threadId, Worker } from "worker_threads";

const woker1 = new Worker('./worker.mjs');
const woker2 = new Worker('./worker.mjs');

woker1.addListener("message", (message) => {
    console.info(`Thread-${threadId} receive from worker 1 : ${message}`);
});
woker2.addListener("message", (message) => {
    console.info(`Thread-${threadId} receive from worker 2 : ${message}`);
});

woker1.postMessage(10);
woker2.postMessage(10);