import test from 'ava';
import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';

import settings from './settings';
import options from './config';

const fs = require('fs');

test.beforeEach('Launch chrome', async t => {
    await puppeteer.launch()
});

test('Example Test', async t => {
    // settings
    const url = options.config().url;
    const audit = options.config().audit;

    // Goto page
    const browser = await puppeteer.launch(settings);
    const page = await browser.newPage();

    await page.goto(url);

    // Lighthouse
    // ISSUE: You probably have multiple tabs open to the same origin ^_^
    await lighthouse(url, settings, audit)
        .catch( (error) => {
            throw error;
        })
        .then( (results) => {
            let auditResult = JSON.stringify(results);

            // Currently creates a file before it checks the score
            return fs.writeFile("test.json", auditResult, 'utf8', err => {
                if (err) {
                    throw err;
                }
            })
        });

    // Does the result meet the requirements ?
    t.pass();

});

test.afterEach('Close browser', async t => {
    const browser = await puppeteer.launch();

    await browser.close();
});
