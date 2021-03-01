require("dotenv").config();
const open = require('open');
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(process.env.SOURCE_URL);
    const hrefs = await page.$$eval('.torrent-list tbody tr td:nth-child(2) a', as => as.map(a => a.href))
    for (const href of hrefs) {
      await open(`${process.env.DESTINATION_URL}/${href.replace(process.env.REPLACE, '')}`)
    }
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }
})();
