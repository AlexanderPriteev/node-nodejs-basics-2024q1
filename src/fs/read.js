import { fileURLToPath  } from 'node:url';
import {dirname, join} from 'node:path';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);

const read = async () => {
    const PATH = join(dirname(__filename), 'files/fileToRead.txt');
    try{
        const contents = await readFile(PATH, { encoding: 'utf8' });
        console.log(contents);
    } catch {
        throw new Error('FS operation failed');
    }

};

await read();