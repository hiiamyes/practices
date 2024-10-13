require("dotenv").config();
const open = require("open");
const puppeteer = require("puppeteer");
const { compact } = require("lodash/fp");
const regexp = require("./regexp");

const COUNT = 75;
(async () => {
  let browser;
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.env.SOURCE_URL);
    const numbers = (
      await page.$$eval(".torrent-list tbody tr td:nth-child(2) a", (as) =>
        as.map((a) => a.text),
      )
    ).map((aText) => {
      try {
        // console.log(aText);
        // console.log(new RegExp(regexp).exec(aText));
        return new RegExp(regexp).exec(aText)[1];
      } catch (error) {
        return null;
      }
    });
    
    numbers.reverse();
    for (let i = 0; i < COUNT; i++) {
      const number = compact(numbers)[i];
      if (!number) continue;
      const url1 = `${process.env.DESTINATION_URL_1}${number}/`;
      const url2 = `${process.env.DESTINATION_URL_2}${number}`;
      const url3 = `${process.env.DESTINATION_URL_3}${number}`;
      // const url = `${process.env.DESTINATION_URL}${number}`;
      // console.log(url)
      await new Promise((r) => setTimeout(() => r(), 300));
      await open(url2);
      await open(url3);
    }
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }
})();
