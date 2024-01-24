import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const textReverse = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, `${[...chunk.toString()].reverse().join('')}\n`);
    },
});

const transform = () => {
    stdin.pipe(textReverse).pipe(stdout);
};

transform();