require("dotenv").config();
const open = require('open');
const puppeteer = require("puppeteer");

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    const page = await browser.newPage();
    await page.goto('https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip121/query')
    await page.waitForSelector('.recaptcha-checkbox')
    await page.click('.recaptcha-checkbox')
    await page.waitForTimeout(4000)
    // await page.goto(process.env.SOURCE_URL);
    // const numbers = (await page.$$eval('.torrent-list tbody tr td:nth-child(2) a', as => as.map(a => a.text))).map(
    //   aText => {
    //     // console.log(aText);
    //     return new RegExp(process.env.REGEXP).exec(aText)[1]
    //   }
    // )
    // for (const number of numbers) {
    //   const url = `${process.env.DESTINATION_URL}/${number}/`;
    //   // console.log(url)
    //   await open(url)
    // }
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }
})();
