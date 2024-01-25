import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);

const decompress = async () => {
    const txtPath = join(dirname(__filename), 'files/fileToCompress.txt');
    const gzPath = join(dirname(__filename), 'files/archive.gz');
    const streamRead = createReadStream(gzPath);
    const streamWrite = createWriteStream(txtPath);
    const decompress = createUnzip();
    await streamRead.pipe(decompress).pipe(streamWrite);
};

await decompress();