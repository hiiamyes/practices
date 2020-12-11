require("dotenv").config();
const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    const page = await browser.newPage();
    await page._client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: "./downloads/",
    });
    await page.goto(process.env.URL);
    let i = 1;
    while (true) {
      await page.click(
        `.torrent-list tbody tr:nth-child(${i}) td:nth-child(3) a:nth-child(1)`
      );
      await page.waitFor(5000);
      i++;
    }
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }
})();
