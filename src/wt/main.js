import { Worker, isMainThread } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { cpus } from 'node:os';

const __filename = fileURLToPath(import.meta.url);

const workerResolve = (worker) => {
    return new Promise(resolve => {
        worker.on('message', (data) => resolve({status: 'resolved', data}));
        worker.on('error', () => resolve({status: 'error', data: null}));
    });
}

const performCalculations = async () => {
    if (!isMainThread) return;

    const PATH = join(dirname(__filename), 'worker.js');
    const workerList = new Array(cpus().length).fill(null)
        .map((_, i) => new Worker(PATH,  { workerData: i + 10 }));
    const result = await Promise.all(workerList.map(e => workerResolve(e)))

    console.log(result);
};

await performCalculations();