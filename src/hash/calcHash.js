import { fileURLToPath  } from 'node:url';
import {dirname, join} from 'node:path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const PATH = join(dirname(__filename), 'files/fileToCalculateHashFor.txt');
    const stream = createReadStream(PATH);
    stream.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();