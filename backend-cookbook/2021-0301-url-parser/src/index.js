require("dotenv").config();
const open = require('open');
const puppeteer = require("puppeteer");
const { compact } = require('lodash/fp')
const regexp = require('./regexp');

(async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(process.env.SOURCE_URL);
    const numbers = (await page.$$eval('.torrent-list tbody tr td:nth-child(2) a', as => as.map(a => a.text))).map(
      aText => {
        try {
          // console.log(aText);
          // console.log(new RegExp(regexp).exec(aText));
          return new RegExp(regexp).exec(aText)[1]
        } catch (error) {
          return null
        }
      }
    )
    for (const number of compact(numbers)) {
      const url = `${process.env.DESTINATION_URL}/${number}/`;
      // console.log(url)
      await open(url)
    }
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }
})();
