import { fileURLToPath  } from 'node:url';
import {dirname, join} from 'node:path';
import { readdir, stat } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const PATH = join(dirname(__filename), 'files');

const list = async (path = PATH) => {
    try{
        const fileList = await readdir(path);
        for(const file of fileList){
            const filePath = join(path, file);
            const fileStat = await stat(filePath);
            if(fileStat.isDirectory()){
                await list(filePath);
            } else {
                console.log(file);
            }
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();