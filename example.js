const puppeteerLighthouse = require('./test');
const config = require('./src/config')();

puppeteerLighthouse(config.url[0], config.audit);
