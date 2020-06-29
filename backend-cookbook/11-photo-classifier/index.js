const path = require("path");
const dayjs = require("dayjs");
const fs = require("fs");
const folder = "/Users/Yes/Dropbox/Camera Uploads";

const log = console.log;

const q = fs
  .readdirSync(path.resolve(folder))
  .filter((file) => /.jpg|.png|.pef/gi.test(file))
  .map((file) => {
    // const date = dayjs(
    //   file.replace(/.jpg|.png|.pef/gi, "").replace(".", ":")
    // ).format("YYYY-MM-DD");
    const date = dayjs(file.split(" ")[0]).format('YYYY-MMDD');
    return {
      date,
      file,
    };
  })
  .forEach(({ date, file }) => {
    // log(date);
    if (!fs.existsSync(path.resolve(folder, date))) {
      fs.mkdirSync(path.resolve(folder, date));
    }
    fs.renameSync(path.resolve(folder, file), path.resolve(folder, date, file));
  });
