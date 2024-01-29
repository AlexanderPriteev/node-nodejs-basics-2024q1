import { fileURLToPath  } from 'node:url';
import {dirname, join} from 'node:path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);

const calculateHash = async () => {
    const hash = createHash('sha256').setEncoding('hex');
    const PATH = join(dirname(__filename), 'files/fileToCalculateHashFor.txt');
    const stream = createReadStream(PATH);
    await pipeline(stream, hash, stdout)
};

await calculateHash();