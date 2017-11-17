// const puppeteer = require('puppeteer');
// const settings = require('./src/settings');
// const testSuite = require('./src/testSuite');
// const fs = require('fs');
//
// function launchChromeAndRunLighthouse() {
//     return puppeteer.launch(settings)
//         .then( (browser) => {
//             // AVA Stuff
//             testSuite(url, config, browser);
//         });
//
// }
//
// module.exports = function (url, config) {
//     launchChromeAndRunLighthouse(url, config)
//         .then(results => {
//             let auditResult = JSON.stringify(results);
//
//             return fs.writeFile("test.json", auditResult, 'utf8', err => {
//                 if (err) throw err;
//
//                 console.log("Done!");
//             });
//         });
// };
