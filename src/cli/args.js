import { argv } from 'node:process';

const parseArgs = () => {
    const list = [];
    for(let i = 0; i < argv.length; i += 1){
       if(/^--/.test(argv[i])) {
           list.push(`${argv[i].replace('--', '')} is ${argv[i + 1]}`);
           i += 1;
       }
    }
    console.log(list.join(', '));
};

parseArgs();