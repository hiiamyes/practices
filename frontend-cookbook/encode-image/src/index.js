const fs = require("fs");
const path = require("path");
const image = fs.readFileSync(path.resolve(__dirname, "./image.jpg"));
fs.writeFileSync("image-base64.txt", image.toString("base64"));

// const fileReader = new FileReader();
// fileReader.onload = () => {
//   fs.writeFileSync("image-base64-2.txt", fileReader.result);
// };
// fileReader.readAsDataURL(image);
