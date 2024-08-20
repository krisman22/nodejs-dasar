import cluster from "cluster";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
    console.info(`primary : ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.addListener(exit, (worker) => {
        console.info(`Worker-${worker.id} is exit`);
    })
}

if (cluster.isWorker) {
    console.info(`worker : ${process.pid}`);

}