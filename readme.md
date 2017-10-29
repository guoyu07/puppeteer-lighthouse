# puppeteer-lighthouse 

Run Lighthouse through Puppeteer!

> @TODO

## Installation

> **Note**: requires at least Node v6.4.0 due to Puppeteer

To install:

```
npm i puppeteer-lighthouse
- OR -
yarn add puppeteer-lighthouse
```

> **Note**: Puppeteer downloads Chromium.

## Usage

```js
const puppeteerLighthouse = require('./test');

const url = "https://www.pokedex.org/";
const config = null;

puppeteerLighthouse(url, config);

```

## Upcoming 

* Ability to scape the site
* Ability to run tests in parallel
* Ability to an Audit test suite
* Ability to audit all pages of a site
* Ability to take screenshots of the site
