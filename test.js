const lighthouse = require('lighthouse');
const puppeteer = require('puppeteer');
const fs = require('fs');

const settings = {
    headless: false,
    args: [
        '--remote-debugging-port=9222'
    ]
};
const url = "https://www.pokedex.org/";
const flags = {};

function launchChromeAndRunLighthouse(url, flags, config) {
    return puppeteer.launch(settings).then(browser => {
        flags.port = settings.port;
        return lighthouse(url, flags, config).then(results =>
            browser.close().then(() => results));
    });
}

launchChromeAndRunLighthouse(url, flags, null).then(results => {
    let auditResult = JSON.stringify(results);

    return fs.writeFile("test.json", auditResult, 'utf8', err => {
        if (err) throw err;

        console.log("Done!");
    });
});
