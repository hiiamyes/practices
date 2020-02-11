const fs = require("fs");
const path = require("path");
const jimp = require("jimp");
const log = console.log;

const e = async () => {
  try {
    const input = await jimp.read(path.resolve(__dirname, "input.jpg"));
    const {
      bitmap: { width, height },
    } = input;
    const w = 800;
    const h = 500;
    const x = width / 2 - w / 2;
    const y = height / 2 - h / 2;
    const output = input.crop(x, y, w, h);
    output.write(path.resolve(__dirname, "output.jpg"));
  } catch (err) {
    log(err);
  }
};

e();
