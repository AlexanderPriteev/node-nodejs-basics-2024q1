import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { spawn } from 'node:child_process';
import { stdout, stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);

const spawnChildProcess = async (args) => {
    const PATH = join(dirname(__filename), 'files/script.js');

    const cp = spawn('node', [PATH, ...args]);
    cp.stdout.on('data', (data) => stdout.write(data));
    stdin.on('data', (data) => cp.stdin.write(data));
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
