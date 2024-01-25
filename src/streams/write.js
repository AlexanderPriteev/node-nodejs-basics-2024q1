import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);

const write = async () => {
    const PATH = join(dirname(__filename), 'files/fileToWrite.txt');
    const stream = createWriteStream(PATH);
    await stdin.pipe(stream);
};

await write();