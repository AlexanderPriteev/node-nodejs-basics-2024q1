import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);

const read = async () => {
    const PATH = join(dirname(__filename), 'files/fileToRead.txt');
    const stream = createReadStream(PATH);
    await pipeline(stream, stdout);
};

await read();