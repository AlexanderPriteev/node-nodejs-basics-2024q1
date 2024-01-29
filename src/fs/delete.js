import { fileURLToPath  } from 'node:url';
import {dirname, join} from 'node:path';
import { unlink } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);

const remove = async () => {
    const PATH = join(dirname(__filename), 'files/fileToRemove.txt');
    try {
        await unlink(PATH);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();