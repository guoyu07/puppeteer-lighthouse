const lighthouse = require('lighthouse');
const puppeteer = require('puppeteer');
const settings = require('./src/settings');
const fs = require('fs');

const url = "https://www.pokedex.org/";
const config = null;

function launchChromeAndRunLighthouse(url, config) {
    return puppeteer.launch(settings)
        .then(browser => {

            return lighthouse(url, settings, config)
                .then(results =>
                    browser.close()
                        .then(() =>
                            results
                        )
                );

        });
}

launchChromeAndRunLighthouse(url, config).then(results => {
    let auditResult = JSON.stringify(results);

    return fs.writeFile("test.json", auditResult, 'utf8', err => {
        if (err) throw err;

        console.log("Done!");
    });
});
