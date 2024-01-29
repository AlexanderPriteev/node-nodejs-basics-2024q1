import { isMainThread, workerData, parentPort } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if(isMainThread) return;
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();