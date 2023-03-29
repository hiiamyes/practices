const fs = require("fs");
const path = require("path");
const { uniqBy } = require("lodash/fp");

const words = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "words.json")),
);
console.log(words.length);
console.log(uniqBy("word", words).length);

fs.writeFileSync(
  path.resolve(__dirname, "words.json"),
  JSON.stringify(uniqBy("word", words)),
);
