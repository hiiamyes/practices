const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const image = fs.readFileSync(path.resolve(__dirname, "./image.jpg"));
// console.log(image.)

fs.writeFileSync("image-base64.txt", image.toString("base64"));
fs.writeFileSync(
  "image-base64-2.txt",
  `data:${mime.lookup("./src/image.jpg")};base64,${image.toString("base64")}`,
);
