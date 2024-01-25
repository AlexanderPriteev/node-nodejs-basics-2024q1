import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);

const compress = async () => {
    const txtPath = join(dirname(__filename), 'files/fileToCompress.txt');
    const gzPath = join(dirname(__filename), 'files/archive.gz');
    const streamRead = createReadStream(txtPath);
    const streamWrite = createWriteStream(gzPath);
    const compress = createGzip();
    await streamRead.pipe(compress).pipe(streamWrite);
};

await compress();