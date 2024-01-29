import { env } from 'node:process';

const parseEnv = () => {
    const rssEnv = Object.entries(env)
        .filter(e => /^RSS_/.test(e[0]))
        .map(e => e.join('='))
        .join('; ')
    console.log(rssEnv)
};

parseEnv();