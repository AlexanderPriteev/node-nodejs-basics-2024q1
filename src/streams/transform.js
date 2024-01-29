import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const textReverse = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, `${[...chunk.toString()].reverse().join('')}\n`);
    },
});

const transform = async () => {
    await pipeline(stdin, textReverse, stdout);
};

await transform();