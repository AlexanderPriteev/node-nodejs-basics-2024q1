import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);

const read = async () => {
    const PATH = join(dirname(__filename), 'files/fileToRead.txt');
    const stream = createReadStream(PATH);
    await stream.pipe(stdout);
};

await read();