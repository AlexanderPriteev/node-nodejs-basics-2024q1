import { fileURLToPath  } from 'node:url';
import {dirname, join} from 'node:path';
import { open, writeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);

const create = async () => {
    const PATH = join(dirname(__filename), 'files/fresh.txt');
    try{
        await open(PATH, 'wx');
        await writeFile(PATH, 'I am fresh and young');
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();