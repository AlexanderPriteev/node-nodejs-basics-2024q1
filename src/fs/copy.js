import { fileURLToPath  } from 'node:url';
import {dirname, join} from 'node:path';
import { cp, access } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);

const isCreate = async (path) => {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}

const copy = async () => {
    const PATH_CURRENT = join(dirname(__filename), 'files');
    const PATH_NEW = join(dirname(__filename), 'files_copy');
    const isCurrent = await isCreate(PATH_CURRENT);
    const isNew = await isCreate(PATH_NEW);
    if(!isCurrent || isNew)  throw new Error('FS operation failed');
    await cp(PATH_CURRENT, PATH_NEW, { recursive: true });
};

await copy();
