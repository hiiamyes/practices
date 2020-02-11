const { createWorker } = require("tesseract.js");
const fs = require("fs");
const path = require("path");

const worker = createWorker();
const log = console.log;

(async () => {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  await worker.setParameters({
    tessedit_char_whitelist:
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
  const images = fs.readdirSync(path.resolve(__dirname, "../images"));
  let success = 0;
  for (const image of images) {
    let {
      data: { text },
    } = await worker.recognize(path.resolve(__dirname, "../images", image));
    text = text.replace("\n", "");
    if (image.replace(".png", "") === text) success++;
    log(image, text);
  }
  log(`success: ${success}`);
  log(`total: ${images.length}`);
  await worker.terminate();
})();
