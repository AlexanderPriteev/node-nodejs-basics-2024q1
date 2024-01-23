import { fileURLToPath  } from 'node:url';
import {dirname, join} from 'node:path';
import { rename as renameFile, access } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);

const isCreate = async (path) => {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}

const rename = async () => {
    const PATH_WRONG = join(dirname(__filename), 'files/wrongFilename.txt');
    const PATH_PROPER = join(dirname(__filename), 'files/properFilename.md');
    const isCurrent = await isCreate(PATH_WRONG);
    const isNew = await isCreate(PATH_PROPER);
    if(!isCurrent || isNew)  throw new Error('FS operation failed');
    await renameFile(PATH_WRONG, PATH_PROPER)
};

await rename();