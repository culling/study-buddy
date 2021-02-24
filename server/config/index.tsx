import { Production, Development } from './env';

const env = process.env.NODE_ENV || 'default';
let config = Production;
switch (env) {
    case 'production':
        config = Production;
        break;
    case 'development':
        config = Development;
        break;
    case 'default':
        config = Production;
        break;
}
console.log("Environment: ", env);

export {
    config,
}